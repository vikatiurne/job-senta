const bcrypt = require("bcrypt");

const { User } = require("../../../models/models");
const UserDto = require("../../dtos/user-dto");
const ApiError = require("../../../errors/ApiErrors");

const passwordService = require("./passwordService.js");
const tokenService = require("./tokenService.js");

class AuthService {
  async registration(email, name, lastName, password) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      return ApiError.badRequest("This Email is already in use");
    }
    const passwordCrypto = await passwordService.cryptoPassword(password); // создание шифра пароля

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

    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequest("User with this email not found");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.badRequest("Invalid password entry");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(
      userDto.id,
      tokens.refreshToken,
      tokens.accessToken
    );

    return { ...tokens, user: userDto };
  }

  async findOrCreateUser(profile) {
    console.log("FUNC ЗАПУЩЕНА", profile)

    
  }
  // async findOrCreateUser(email, name, lastName) {
  //   console.log("FUNC ЗАПУЩЕНА")

  //   const user = await User.findOrCreate({ where: { email }, defaults: {
  //     username: name,
  //     lastName,
  //     role: { default: "USER" },
  //   }, });
    
    
  //   const userDto = new UserDto(user);
  //   // const tokens = tokenService.generateTokens({ ...userDto });
  //   // await tokenService.saveToken(
  //   //   userDto.id,
  //   //   tokens.refreshToken,
  //   //   tokens.accessToken
  //   // );

  //   // return { ...tokens, user: userDto };
  //   return {  user: userDto };
  // }

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

    return { ...tokens, user: userDto };
  }

  async forgotPassword(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.badRequest("User with this email not found");
    }
    const token = tokenService.generateResetToken({ id: user.id });
    await mailService.sendResetPasswordMail(
      email,
      `${process.env.CLIENT_URL}/resetpassword/${token}`
    );

    await User.update({ resetLink: token }, { where: { email } });
    return {
      message: "Please check your email",
    };
  }

  async resetPassword(newPass, resetLink) {
    const userData = tokenService.validateResetToken(resetLink);
    let user = await User.findOne({ where: { resetLink } });
    if (!user || !userData) {
      throw ApiError.badRequest("User not found");
    }
    const hashPassword = await passwordService.cryptoPassword(newPass);
    const obj = {
      password: hashPassword,
      resetLink: "",
    };
    user = _.extend(user, obj);
    await user.save();
    return { message: "Password was changed" };
  }
}

module.exports = new AuthService();
