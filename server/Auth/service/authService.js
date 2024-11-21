const {User} = require("../../models/models");
const passwordService = require("./passwordService");
const ApiError = require("../../errors/ApiErrors");
const bcrypt = require("bcrypt");



class authService {

    async registration (email, name, lastName ,password){
        try {
            if (!email|| !name || !password || !lastName) {
                return ApiError.badRequest("Email and name and password is required");
            }

            const candidate = await User.findOne({where: {email}})

            if(candidate){
                return ApiError.badRequest("User with this e-mail address is already registered. ");
            }

            const passwordCrypto = await passwordService.cryptoPassword(password); // создание шифра пароля

            const userData = User.create({email,name,lastName, password: passwordCrypto});

            return userData;

        }catch(err){
            ApiError.internal('unknown error')
            console.log(err);
        }
    }

    async login(email, password) {
        try {
            if (!email|| !password) {
                return ApiError.badRequest("Email and password is required");
            }

            const user = await User.findOne({where: {email}})

            if(!user){
                return ApiError.badRequest("User this e-mail address does not  registered. ");
            }

            const isPaswordEquals = await bcrypt.compare(password, user.password);

            if(!isPaswordEquals){
                return  ApiError.badRequest('Email and password unfaithful')
            }


            const userData = user;

            return userData;

        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new authService();