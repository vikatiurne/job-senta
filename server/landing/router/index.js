const Router = require('express');
const router = new Router();
const landingController = require('../controller/landingController');
const {body} = require('express-validator')


router.post('/landingReg',
    body('email').isEmail(),
    landingController.registration) // блок регестрации

router.get('/landingUser', landingController.getUser) // получение юзеров


module.exports = router;