const Router = require('express');
const router = new Router();
const landingRouter  = require('../landing/router/index');
const authRouter  = require('../mvp/Auth/router/index');
const userRouter  = require('../mvp/User/router/index');


router.use(landingRouter)
router.use("/auth",authRouter)
router.use(userRouter)


module.exports = router;