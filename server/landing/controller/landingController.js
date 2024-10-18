const ApiError = require("../../errors/ApiErrors");
const {validationResult} = require("express-validator");
const {UserLanding} = require("../../models/models");

class LandingController {


    async registration(req, res, next) {
        try {
            const errors = validationResult(req);

            if(!errors.isEmpty()){
                return next(ApiError.badRequest('Помилка валідації', errors.array())); // валидация помилок на Пошту
            }

            const {name, email} = req.body;

            const  userData = await UserLanding.create({name, email});

            return res.status(200).json({userData})

        } catch (err) {
            next(err)
        }
    }

    async getUser(req, res, next) {
        try {

            const  userData = await UserLanding.findAll();

            return res.status(200).json({userData})

        } catch (err) {
            next(err)
        }
    }

}

module.exports = new LandingController();