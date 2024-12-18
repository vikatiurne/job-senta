const ApiErrors = require("../../errors/ApiErrors");
const resumeService = require("./resumeService");

class ResumeController {
  async create(req, res, next) {
    const userId = req.user.id;
    const { values } = req.body;
    try {
      const resume = await resumeService.create(userId, values);
      return res.status(201).json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    const { id } = req.user;
    const { page, limit, sort, isArchive } = req.query;

    try {
      const resumes = await resumeService.getAll(id, page, limit, sort, isArchive);
      return res.json(resumes);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    try {
      const resume = await resumeService.getOne(id);
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { info } = req.body;
      const updatedResume = await resumeService.update(id, info);
      return res.json(updatedResume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { resumeIds } = req.body;
      const userId = req.user.id;
      const resume = await resumeService.delete(id, resumeIds, userId);
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async clone(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const resume = await resumeService.clone(id, userId);
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async archive(req, res, next) {
    try {
      const { id } = req.params;
      const { resumeIds, isArchive, isFavorite } = req.body;
      const userId = req.user.id;
      const resume = await resumeService.archive(id, resumeIds, userId, isArchive, isFavorite);
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }
}

module.exports = new ResumeController();
