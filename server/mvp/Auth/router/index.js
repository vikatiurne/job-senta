const Router = require("express");
const passport = require("passport");
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
router.put("/reset-password", authController.resetPassword);

// Oauth0

// router.get('/login', passport.authenticate('auth0', { scope: 'openid email profile offline_access',prompt: 'select_account' }));
router.get('/login', (req, res, next) => {
  console.log('Состояние перед аутентификацией:', req.session.state);
  passport.authenticate('auth0', {
    scope: 'openid profile email offline_access r_liteprofile r_emailaddress'
  })(req, res, next);
});

  router.get('/login/callback', (req, res, next) => {  
    console.log('Состояние в коллбэке:', req.query.state);
  console.log('Текущее состояние в сессии:', req.session); 
    
    passport.authenticate('auth0', (err, user, info) => { 
      console.log('Информация аутентификации:', info)
      if (err) {  
        console.error('Ошибка аутентификации:', err); // Логируем ошибку  
        return next(err); // Передаем управление обработчику ошибок  
      }  
      if (!user) {  
        console.log('Пользователь не найден.'); // Логируем, если пользователи не найдены  
        return res.redirect('/error'); // Перенаправление на страницу ошибки  
      }  
      req.logIn(user, (err) => {  
        if (err) {  
          console.error('Ошибка при входе:', err); // Логируем ошибку входа  
          return next(err); // Передаем управление обработчику ошибок  
        }  
        console.log("Успешный вход:", user); // Логируем успешный вход  
        console.log('Состояние сессии после входа:', req.session);
        return res.redirect(`${process.env.CLIENT_URL}/user/home`); // Успешная аутентификация  
      });  
    })(req, res, next);  
  });

module.exports = router;
