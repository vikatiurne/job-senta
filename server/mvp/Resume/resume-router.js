const { Router } = require('express');
const resumeController = require('./resumeController');
const authMiddleware = require('../../middlewares/AuthMiddleware.js');

const router = new Router();

router.post('/create', authMiddleware, resumeController.create);
router.get('/getAll', authMiddleware, resumeController.getAll);
router.get('/getOne/:id', resumeController.getOne);
router.put('/update/:id', resumeController.update);

module.exports = router;
