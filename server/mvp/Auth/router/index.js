const Router = require("express");
const { body } = require("express-validator");
const authController = require("../controller/authController");

const router = new Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 2, max: 32 }),
  authController.registration
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 4, max: 32 }),
  authController.login
);

router.post("/logout", authController.logout);
router.get("/refresh", authController.autoLogin);

router.put("/forgot-password", authController.forgotPassword);
router.put("/recovery-password", authController.resetPassword);




module.exports = router;
