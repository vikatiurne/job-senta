const { User } = require("../../../models/models");

class UserController {
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const userData = await User.destroy({ where: { id: id } });

      return res.status(200).json({ userData });
    } catch (err) {
      next(err);
    }
  }

  async getUser(req, res, next) {
    try {
      const userData = await User.findAll();

      return res.status(200).json({ userData });
    } catch (err) {
      next(err);
    }
  }

  async getUserOne(req, res, next) {
    try {
      const { id } = req.params;

      const userData = await User.findOne({ where: { id } });

      return res.status(200).json({ userData });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new UserController();
