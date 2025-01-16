const bcrypt = require("bcrypt");

class PasswordService {
  cryptoPassword(password) {
    try {
      const salt = 7;

      return bcrypt.hashSync(password, salt); 
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new PasswordService();
