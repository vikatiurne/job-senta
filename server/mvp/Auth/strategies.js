const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const { Pool } = require("pg");

const { User } = require("../../models/models");
const authService = require("./service/authService");

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
        const userData = await authService.socialAuth(
          refreshToken,
          params,
          profile,
          "google"
        );
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
        const userData = await authService.socialAuth(
          refreshToken,
          params,
          profile,
          "linkedin"
        );
        return await done(null, userData);
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
