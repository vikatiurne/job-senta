const Router = require('express');
const router = new Router();
const landingRouter  = require('../landing/router/index');
const authRouter  = require('../Auth/router/index');
const userRouter  = require('../User/router/index');


router.use(landingRouter)
router.use(authRouter)
router.use(userRouter)


module.exports = router;