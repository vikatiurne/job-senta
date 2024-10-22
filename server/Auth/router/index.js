const Router = require('express');
const router = new Router();
const {body} = require('express-validator')
const authController = require('../controller/authController');



router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:2, max:32}),
    authController.registration);

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({min:4, max:32}),
    authController.login);

//router.post('/logout', authController.logout)
//router.get('/activate/:link', authController.activate)
//router.get('/refresh', authController.refresh) на будущее

module.exports = router;