const Router = require("express");
const passport = require("../strategies");
const axios = require("axios");
const ApiErrors = require("../../../errors/ApiErrors");

const router = new Router();

// google
router.get("/google", (req, res, next) => {
  passport.authenticate("google")(req, res, next);
});
router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/error");
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      req.session.user = user;
      console.log("req.session.user:", req.session.user);
      res.cookie("refresh_jobseeker", user.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "none",
        // SameSite: "Strict",
      });
      return res.redirect(`${process.env.CLIENT_URL}/get-sosial-user`);
    });
  })(req, res, next);
});

// linkedin
router.get("/linkedin", (req, res, next) => {
  passport.authenticate("linkedin")(req, res, next);
});
router.get("/linkedin/callback", (req, res, next) => {
  passport.authenticate(
    "linkedin",
    { failureRedirect: "/error" },
    (err, user, info) => {
      if (err) {
        return res.status(400).json({
          title: "Ошибка аутентификации",
          text: err.message || "Непредвиденная ошибка",
        });
      }
      if (!user) {
        return res.redirect("/error");
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        req.session.user = user;
        res.cookie("refresh_jobseeker", user.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
          secure: true,
          sameSite: "none",
          // SameSite: "Strict",
        });
        return res.redirect(`${process.env.CLIENT_URL}/get-sosial-user`);
      });
    }
  )(req, res, next);
});

router.get("/social/user", async (req, res) => {
  const user = await req.session.user;
  console.log("REQ:",req);
  console.log("REQsession:",req.session);
  if (user) {
    return res.json(req.session.user);
  } else {
    return res.status(401).json({ message: "User not authenticated" });
  }
});

module.exports = router;
