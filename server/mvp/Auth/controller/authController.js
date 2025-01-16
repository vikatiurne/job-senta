const { validationResult } = require("express-validator");
const authService = require("../service/authService");
const ApiError = require("../../../errors/ApiErrors");

class AuthController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.badRequest("Error validation result", errors.array())
        );
      }
      const { email, lastName, username, password } = req.body;
      const user = await authService.registration(
        email,
        username,
        lastName,
        password
      );
      res.cookie("refresh_jobseeker", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        SameSite: "Strict",
      });
      return res.json(user);
    } catch (err) {
      next(ApiError.badRequest(err.message));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await authService.login(email, password);
      res.cookie("refresh_jobseeker", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        SameSite: "Strict",
      });
      return res.json(user);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async logout(req, res, next) {
    try {
      const { refresh_jobseeker } = req.cookies;
      const token = await authService.logout(refresh_jobseeker);
      res.clearCookie("connect.sid", { secure: false, httpOnly: true });
      res.clearCookie("refresh_jobseeker", {
        secure: true,
        sameSite: "none",
      });
      return res.json(token);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async autoLogin(req, res, next) {
    try {
      const { refresh_jobseeker } = req.cookies;
      const user = await authService.refresh(refresh_jobseeker);
      res.cookie("refresh_jobseeker", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        SameSite: "Strict",
      });
      return res.json(user);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async forgotPassword(req, res, next) {
    try {
      const { email } = req.body;
      const user = await authService.forgotPassword(email);
      return res.json(user);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { newPass, resetLink } = req.body;
      const user = await authService.resetPassword(newPass, resetLink);
      return res.json(user);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async checkConnect(req, res, next) {
    res.status(200).json({ status: true });
  }
}

module.exports = new AuthController();
