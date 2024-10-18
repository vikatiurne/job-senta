const Router = require('express');
const router = new Router();
const landingRouter  = require('../landing/router/index');

router.use(landingRouter)


module.exports = router;