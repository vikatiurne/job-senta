import $api from '../../http/axios';

export default class QuestionServices {
  static async sendQuestion(email, name, question) {
    return await $api.post('api/question/send-question', {
      email,
      name,
      question,
    });
  }
}
