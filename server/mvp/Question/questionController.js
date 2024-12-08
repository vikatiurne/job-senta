const ApiErrors = require("../../errors/ApiErrors");
const questionService = require("./questionService");

class QuestionController {
  async sendQuestion(req, res, next) {
    try {
      const { email, name, question } = req.body;
      const user = await questionService.sendQuestion( email, name, question);
      return res.json(user);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }
}

module.exports = new QuestionController();
