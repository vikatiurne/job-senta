const bcrypt = require("bcrypt");
const _ = require("lodash");

const { User, UserLanding } = require("../../../models/models");
const UserDto = require("../../dtos/user-dto");
const ApiError = require("../../../errors/ApiErrors");

const passwordService = require("./passwordService.js");
const tokenService = require("./tokenService.js");
const MailService = require("./mailService.js");

class AuthService {
  async registration(email, username, lastName, password) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApiError.badRequest({
        title: "This Email is already in use",
        text: "The email address you entered is already in use. Please go to Sing in where you can enter your personal account and reset your password if necessary. Or enter another email.",
      });
    }
    const passwordCrypto = await passwordService.cryptoPassword(password); 

    const userData = await User.create({
      email,
      username,
      lastName,
      password: passwordCrypto,
    });
    const userDto = new UserDto(userData);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );

    return { ...userDto, ...tokens };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequest({
        title: "The user with the specified e-mail was not found!",
        text: "User with this email address not found. Please check the email address or register.",
      });
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.badRequest({
        title: "The password is incorrect!",
        text: "Incorrect password. Please check your input or use the password recovery function.",
      });
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );

    return { ...userDto, ...tokens };
  }

  async socialAuth(refreshToken, params, profile, sosialName) {
    let username, lastName, email;

    if (sosialName === "google") {
      username = profile._json.given_name || profile._json.nickname;
      lastName = profile._json.family_name || profile._json.nickname;
      email = profile.emails[0].value;
    } else {
      username = profile._json.given_name || profile._json.name;
      lastName = profile._json.family_name || profile._json.name;
      email = profile.email;
    }
    const randomPassword = passwordService.cryptoPassword(profile._json.name);
    const [user] = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        lastName,
        email,
        password: randomPassword,
      },
    });

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    const userData = {
      ...userDto,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    };
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );
    return userData;
  }

  async logout(refreshToken) {
    return await tokenService.removeToken(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.unauthorizedError();
    }
    const userData = await tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);

    if (!tokenFromDb || !userData) {
      throw ApiError.unauthorizedError();
    }

    const user = await User.findOne({ where: { email: userData.email } });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );

    return { ...userDto, ...tokens };
  }

  async forgotPassword(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequest({
        title: "The user with the specified e-mail was not found!",
        text: "User with this email address not found. Please check the email address or register.",
      });
    }
    const token = tokenService.generateResetToken({ id: user.id });
    await MailService.sendResetPasswordMail(
      email,
      `${process.env.CLIENT_URL}/recovery-password/${token}`
    );

    await User.update({ resetLink: token }, { where: { email } });
    return {
      title: "Please check your email",
      text: "We have just sent an email with the next steps to reset your password. The message should arrive within 5 minutes. If it's not there, please check your spam folder or try again.",
    };
  }

  async resetPassword(newPass, resetLink) {
    const userData = tokenService.validateResetToken(resetLink);
    let user = await User.findOne({ where: { resetLink } });
    if (!user || !userData) {
      throw ApiError.badRequest({
        title: "The user with the specified e-mail was not found!",
        text: "User with this email address not found. Please check the email address or register.",
      });
    }
    const hashPassword = await passwordService.cryptoPassword(newPass);
    const obj = {
      password: hashPassword,
      resetLink: "",
    };
    user = _.extend(user, obj);
    await user.save();
    const userDto = new UserDto(userData);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );
    return {
      title: "CONGRATULATIONS!",
      text: "Your password has been successfully changed! Now you can enter your personal account using new data.",
    };
  }
}

module.exports = new AuthService();
