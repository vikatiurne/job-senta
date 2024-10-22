const {validationResult} = require("express-validator");
const authService = require("../service/authService");
const ApiError = require("../../errors/ApiErrors");




class AuthController {

    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return next(ApiError.badRequest("Error validation result", errors.array()));
            }

            const { email, name ,password } = req.body;

            const userData = await authService.registration(email, name, password); //сервис для регестрации

            res.status(200).json({userData})
        }catch(err) {
            next(err)
        }

    }

    async login(req, res, next) {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()) {
                return next(ApiError.badRequest("Error validation result", errors.array()));
            }

            const { email ,password } = req.body;

            const userData = await authService.login(email, password); //сервис для логина

            res.status(200).json({userData})
        }catch(err) {
            next(err)
        }
    }

}

module.exports = new AuthController();