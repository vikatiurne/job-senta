const Router = require('express');
const questionController = require('./questionController');

const router = new Router();

router.post('/send-question', questionController.sendQuestion);

module.exports = router;