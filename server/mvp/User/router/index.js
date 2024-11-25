const Router = require('express');
const router = new Router();
const userController = require('../controller/userController');



router.delete('/user/:id', userController.delete) // Удаление юзера

router.get('/user', userController.getUser) // получение юзеров
router.get('/user/:id', userController.getUserOne) // получение юзеров


module.exports = router;