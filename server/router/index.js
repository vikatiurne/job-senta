const Router = require('express');
const router = new Router();
const landingRouter  = require('../landing/router/index');
const oauthRouter  = require('../mvp/Auth/router/oauth-router');
const authRouter  = require('../mvp/Auth/router//index');
const userRouter  = require('../mvp/User/router/index');


router.use(landingRouter)
router.use("/auth",authRouter)
router.use("/oauth",oauthRouter)
router.use(userRouter)


module.exports = router;