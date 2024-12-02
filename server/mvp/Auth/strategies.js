const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const { Pool } = require("pg");

const passwordService = require("./service/passwordService");
const TokenService = require("./service/tokenService");
const { User } = require("../../models/models");
const UserDto = require("../dtos/user-dto");

// проверка соединения с бд
const pool = new Pool({
  connectionString: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
});

pool
  .connect()
  .then(() => console.log("Postgres connected"))
  .catch((err) => console.error("Connection error", err.stack));

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/api/oauth/google/callback`,
      passReqToCallback: true,
      scope: [
        "openid",
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
      prompt: "consent",
    },
    async (accessToken, refreshToken, extraParams, params, profile, done) => {
      try {
        let userData = await User.findOne({
          where: { email: profile.emails[0].value },
        });

        if (!userData) {
          const randomPassword = passwordService.cryptoPassword(
            profile._json.name
          );

          userData = await User.create({
            username: profile._json.given_name || profile._json.nickname,
            lastName: profile._json.family_name || profile._json.nickname,
            email: profile.emails[0].value,
            password: randomPassword,
          });
          const userDto = new UserDto(userData);
          if (params && params.access_token) {
            const { access_token } = params;
            await TokenService.saveToken(
              userDto.id,
              refreshToken,
              access_token
            );
          } else {
            return done(new Error("Access token not found in params"));
          }
          console.log("New user created:", userDto);
        } else {
          console.log("Existing user found:", userData);
        }

        return done(null, userData);
      } catch (err) {
        console.error("Error creating or finding user:", err);
        return done(err, null);
      }
    }
  )
);


passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/api/oauth/linkedin/callback`,
      passReqToCallback: true,
      scope: ["openid", "profile", "email"],
      prompt: "consent",
      state: true,
    },
    async (accessToken, refreshToken, extraParams, params, profile, done) => {
      try {
        console.log("EMAIL",profile)
        let userData = await User.findOne({
          where: { email: profile.email },
        });

        if (!userData) {
          const randomPassword = passwordService.cryptoPassword(
            profile._json.name
          );

          userData = await User.create({
            username: profile._json.given_name || profile._json.name,
            lastName: profile._json.family_name || profile._json.name,
            email: profile._json.email,
            password: randomPassword,
          });
          const userDto = new UserDto(userData);
          if (params && params.access_token) {
            const { access_token } = params;
            console.log('ACCESS:',access_token)
            await TokenService.saveToken(
              userDto.id,
              refreshToken,
              access_token
            );
          } else {
            return done(new Error("Access token not found in params"));
          }
          console.log("New user created:", userDto);
        } else {
          console.log("Existing user found:", userData);
        }

        return done(null, userData);
      } catch (err) {
        console.error("Error creating or finding user:", err);
        return done(err, null);
      }
    }
    
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findByPk(id);
  done(null, user);
});

module.exports = passport;
