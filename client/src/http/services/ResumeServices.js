import $api from "../../http/axios";

export default class ResumeServices {
  static async createResume(values) {
    return await $api.post("api/resumes/create", { values });
  }
  static async getAllResume(
    page,
    limit,
    sort,
    isArchive,
    isFavorite,
    searchText
  ) {
    return await $api.get("api/resumes/getAll", {
      params: { page, limit, sort, isArchive, isFavorite, searchText },
    });
  }
  static async getOneResume(resumeId) {
    return await $api.get(`api/resumes/getOne/${resumeId}`);
  }
  static async updateResume(resumeId, info) {
    return await $api.put(`api/resumes/update/${resumeId}`, { info });
  }
  static async deleteOneResume(resumeId) {
    return await $api.delete(`api/resumes/deleteOne/${resumeId}`);
  }
  static async deleteSeveralResume(resumeIds) {
    return await $api.post("api/resumes/deleteSeveral", { resumeIds });
  }
  static async cloneResume(resumeId) {
    return await $api.post(`api/resumes/clone/${resumeId}`);
  }

  static async archiveOneResume(resumeId, isArchive) {
    return await $api.put(`api/resumes/archiveOne/${resumeId}`, { isArchive });
  }
  static async archiveSeveralResume(resumeIds, isArchive) {
    return await $api.put("api/resumes/archiveSeveral", {
      resumeIds,
      isArchive,
    });
  }
  static async favoriteResume(resumeId, isFavorite) {
    return await $api.put(`api/resumes/favorite/${resumeId}`, { isFavorite });
  }

  static async uploadDocOrPdf(formData, config) {
    return await $api.post(`api/resumes/uploads/`, formData, config);
  }
}
