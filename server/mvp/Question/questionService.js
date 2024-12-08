const { UserLanding } = require("../../models/models.js");
const QuestionMailService = require("./questionMailService.js");

class QuestionService {

  async sendQuestion(email, name, question) {
    const user = await UserLanding.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
      },
    });
    await QuestionMailService.sendQuestionMail(name, email, question);
    return {
      title: 'thank you!',
      text: 'Thank you for your question. It is important for us to be useful to you. The answer will come to you by mail.',
    };
  }
}

module.exports = new QuestionService();
