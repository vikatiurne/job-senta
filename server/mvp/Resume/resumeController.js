const fs = require("fs");
const ApiErrors = require("../../errors/ApiErrors");
const resumeService = require("./resumeService");

class ResumeController {
  constructor() {
    this.updateResumeField = this.updateResumeField.bind(this);
    this.archive = this.archive.bind(this);
    this.favorite = this.favorite.bind(this);
  }

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
    const {
      page = 1,
      limit = 10,
      sort = null,
      isArchive = false,
      isFavorite = false,
      searchText = "",
    } = req.query;

    try {
      const resumes = await resumeService.getAll(
        id,
        page,
        limit,
        sort,
        isArchive,
        isFavorite,
        searchText
      );
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
      const userId = req.user.id;
      const resumes = await resumeService.update(id, info, userId);
      return res.json(resumes);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const { resumeIds } = req.body;
      const userId = req.user.id;
      const resumes = await resumeService.delete(id, resumeIds, userId);
      return res.json(resumes);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async clone(req, res, next) {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      const resumes = await resumeService.clone(id, userId);
      return res.json(resumes);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async updateResumeField(req, res, next, action) {
    try {
      const { id } = req.params;
      const { resumeIds, isArchive } = req.body;
      const userId = req.user.id;

      const resume = await resumeService.updateResumeField(
        id,
        resumeIds,
        userId,
        isArchive
      );
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async archive(req, res, next) {
    return this.updateResumeField(req, res, next, "archive");
  }

  async favorite(req, res, next) {
    try {
      const { id } = req.params;
      const { isFavorite } = req.body;
      console.log("FAV:", isFavorite);
      const userId = req.user.id;
      const resume = await resumeService.favorite(id, userId, isFavorite);
      return res.json(resume);
    } catch (error) {
      next(ApiErrors.badRequest(error.message));
    }
  }

  async uploadResume(req, res) {
    const userId = req.user.id;
    let resumeData;
    console.log("File:", req.file);

    if (req.file.mimetype === "application/pdf") {
      resumeData = await resumeService.processPDF(req.file.path);
    } else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      resumeData = await resumeService.processDOCX(req.file.path);
    } else {
      return res.status(400).json({ message: "Unsupported file format" });
    }
    // console.log("RESUMEDATA:", resumeData);
    // const newResume = await resumeService.create(userId, resumeData);
    const newResume = {}

    fs.unlinkSync(req.file.path);

    res.status(201).json(newResume);
  }
}

module.exports = new ResumeController();
