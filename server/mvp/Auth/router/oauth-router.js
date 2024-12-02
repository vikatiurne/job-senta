const Router = require("express");
const passport = require("../strategies");
const axios = require("axios");

const router = new Router();

// google
router.get("/google", passport.authenticate("google"));
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
      return res.redirect(`${process.env.CLIENT_URL}/user/home`);
    });
  })(req, res, next);
});

// linkedin
router.get("/linkedin", passport.authenticate("linkedin"));
router.get("/linkedin/callback", (req, res, next) => {
  passport.authenticate(
    "linkedin",
    { failureRedirect: "/error" },
    (err, user, info) => {
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
        return res.redirect(`${process.env.CLIENT_URL}/user/home`);
      });
    }
  )(req, res, next);
});

module.exports = router;
