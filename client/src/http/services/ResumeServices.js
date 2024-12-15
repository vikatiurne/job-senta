import $api from "../../http/axios";

export default class ResumeServices {
  static async createResume(values) {
    return await $api.post("api/resumes/create", {values});
  }
  static async getAllResume(page, limit, sort) {
    return await $api.get("api/resumes/getAll",{
        params: { page, limit, sort },
      });
  }
  static async getOneResume(resumeId) {
    return await $api.get(`api/resumes/getOne/${resumeId}`);
  }
  static async updateResume(resumeId,info) {
    return await $api.get(`api/resumes/update/${resumeId}`, {info});
  }
}
