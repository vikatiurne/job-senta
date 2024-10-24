const bcrypt = require('bcrypt');

class passwordService {

    cryptoPassword (password){
        try {
            const salt = 7;

            return bcrypt.hashSync(password, salt); // указание сложности шифра и само хеширование

        }catch(err){
            console.log(err);
        }
    }
}

module.exports = new passwordService();