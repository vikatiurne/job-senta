const { Op } = require("sequelize");

const {
  Resume,
  Project,
  Work,
  Education,
  Certificate,
  Adward,
  Volunteering,
  Publication,
  AiAnalyse,
} = require("../../models/models");

class ResumeService {
  constructor() {
    this.updateResumeField = this.updateResumeField.bind(this);
    this.archive = this.archive.bind(this);
    this.favorite = this.favorite.bind(this);
  }

  checkNotNullFielsd(data) {
    const filterFields = (item) => {
      if (Array.isArray(item)) {
        return item.map(filterFields).filter((element) => {
          return (
            (typeof element === "object" &&
              element !== null &&
              Object.keys(element).length > 0) ||
            typeof element !== "object"
          );
        });
      } else if (typeof item === "object" && item !== null) {
        return Object.fromEntries(
          Object.entries(item)
            .filter(
              ([key, value]) =>
                value !== null &&
                value !== "" &&
                !(Array.isArray(value) && value.length === 0)
            )
            .map(([key, value]) => [key, filterFields(value)])
        );
      }
      return item !== null && item !== "" ? item : null;
    };
    const filteredData = filterFields(data);
    return filteredData;
  }

  existsInDataArray(dataArray, entry, modelName) {
    switch (modelName) {
      case "Project":
        return dataArray.some(
          (data) =>
            data.name === entry.name &&
            data.role === entry.role &&
            data.link === entry.link &&
            data.resumeId === entry.resumeId
        );
      case "Work":
        return dataArray.some(
          (data) =>
            data.companyName === entry.companyName &&
            data.position === entry.position &&
            data.dateStart === entry.dateStart &&
            data.dateEnd === entry.dateEnd &&
            data.resumeId === entry.resumeId
        );
      case "Education":
        return dataArray.some(
          (data) =>
            data.educName === entry.educName &&
            data.specialty === entry.specialty &&
            data.dateStart === entry.dateStart &&
            data.dateEnd === entry.dateEnd &&
            data.resumeId === entry.resumeId
        );
      case "Certificate":
        return dataArray.some(
          (data) =>
            data.certificateName === entry.certificateName &&
            data.institution === entry.institution &&
            data.dateStart === entry.dateStart &&
            data.dateEnd === entry.dateEnd &&
            data.resumeId === entry.resumeId
        );
      case "Adward":
        return dataArray.some(
          (data) =>
            data.nameAward === entry.nameAward &&
            data.institutionAward === entry.institutionAward &&
            data.date === entry.date &&
            data.resumeId === entry.resumeId
        );
      case "Volunteering":
        return dataArray.some(
          (data) =>
            data.voluntering === entry.voluntering &&
            data.dateStart === entry.dateStart &&
            data.dateEnd === entry.dateEnd &&
            data.resumeId === entry.resumeId
        );
      case "Publication":
        return dataArray.some(
          (data) =>
            data.publication === entry.publication &&
            data.date === entry.date &&
            data.publicationLink === entry.publicationLink &&
            data.resumeId === entry.resumeId
        );
      default:
        return false;
    }
  }

  async createRelatedTables(resume, data, model, associateMethod) {
    const filteredData = await this.checkNotNullFielsd(data);

    if (Array.isArray(filteredData) && filteredData.length > 0) {
      const models = await model.bulkCreate(
        filteredData.map((item) => ({ ...item })),
        { returning: true }
      );
      await resume[associateMethod](models);
    }
  }

  async updateRelatedTables(model, resumeId, dataArray) {
    if (Array.isArray(dataArray) && dataArray.length > 0) {
      for (const data of dataArray) {
        const existingEntry = await model.findOne({ where: { resumeId } });
        if (existingEntry) {
          await existingEntry.update(data);
        } else {
          await model.create({ resumeId, ...data });
        }
      }
    } else {
      const existingEntries = await model.findAll({ where: { resumeId } });
      for (const entry of existingEntries) {
        const existsInData = this.existsInDataArray(dataArray, entry, model);
        if (!existsInData) {
          await entry.destroy();
        }
      }
    }
  }

  async create(userId, resumeData) {
    const resume = await Resume.create({
      info: resumeData,
      target: resumeData.desiredPosition,
      email: resumeData.email,
      phone: resumeData.phone,
      linkedin: resumeData.LinkedIn,
      profSummaries: resumeData.professionalSummary,
      skills: resumeData.skills,
      interests: resumeData.interests,
      userId,
    });

    const relatedTables = [
      {
        data: resumeData.projExp,
        model: Project,
        associateMethod: "addProjects",
      },
      { data: resumeData.workExp, model: Work, associateMethod: "addWorks" },
      {
        data: resumeData.educ,
        model: Education,
        associateMethod: "addEducations",
      },
      {
        data: resumeData.certif,
        model: Certificate,
        associateMethod: "addCertificates",
      },
      { data: resumeData.award, model: Adward, associateMethod: "addAdwards" },
      {
        data: resumeData.voluntering,
        model: Volunteering,
        associateMethod: "addVolunteerings",
      },
      {
        data: resumeData.publ,
        model: Publication,
        associateMethod: "addPublications",
      },
    ];

    for (const { data, model, associateMethod } of relatedTables) {
      if (
        data &&
        Array.isArray(data) &&
        data.length > 0 &&
        data.some((item) =>
          Object.keys(item).some(
            (key) => item[key] !== null && item[key] !== ""
          )
        )
      ) {
        await this.createRelatedTables(resume, data, model, associateMethod);
      }
    }

    return this.getAll(userId);
  }

  async getAll(
    userId,
    page,
    limit,
    sort,
    isArchive,
    isFavorite,
    searchText = ""
  ) {
    isFavorite = isFavorite === undefined ? false : isFavorite !== "false";
    isArchive = isArchive || false;
    page = page || 1;
    limit = limit || 10;
    let offset = (page - 1) * limit;

    let resumeSort = [["createdAt", "DESC"]];
    if (sort) {
      switch (sort) {
        case "target_A-Z":
          resumeSort = [["target", "ASC"]];
          break;
        case "target_Z-A":
          resumeSort = [["target", "DESC"]];
          break;
        case "createdAt_ASC":
          resumeSort = [["createdAt", "ASC"]];
          break;
        case "createdAt_DESC":
          resumeSort = [["createdAt", "DESC"]];
          break;
        case "updatedAt_ASC":
          resumeSort = [["updatedAt", "ASC"]];
          break;
        case "updatedAt_DESC":
          resumeSort = [["updatedAt", "DESC"]];
          break;
        default:
          break;
      }
    }

    const queries = {
      offset,
      limit,
      order: resumeSort,
      subQuery: false,
    };

    const whereCondition = {
      userId,
      isArchive,
    };

    if (isFavorite) whereCondition.isFavorite = true;
    if (searchText!=="") {
      whereCondition.target = {
        [Op.like]: `%${searchText}%`,
      };
    }

    const activeResumes  = await Resume.findAndCountAll({
      where: whereCondition,
      ...queries,
      attributes: [
        "id",
        "target",
        "isFavorite",
        "createdAt",
        "updatedAt",
        "isArchive",
      ],
      distinct: true,
    });

    const archivedResumesCount = await Resume.count({  
      where: { userId, isArchive: true }  
  });

  return { activeResumes: activeResumes, archivedCount: archivedResumesCount }
  }

  async getOne(id) {
    const resume = await Resume.findOne({
      where: { id },
    });
    return resume.info;
  }

  async update(id, info, userId) {
    await Resume.update(
      {
        info,
        target: info?.desiredPosition,
        email: info?.email,
        phone: info?.phone,
        linkedin: info?.LinkedIn,
        profSummaries: info?.professionalSummary,
        skills: info?.skills,
        interests: info?.interests,
        ifFavorite: info?.ifFavorite,
        ifArchive: info?.ifArchive,
      },
      { where: { id } }
    );
    const filteredData = this.checkNotNullFielsd(info);
    const { projExp, workExp, educ, certif, award, voluntering, publ } =
      filteredData;

    await this.updateRelatedTables(Project, id, projExp);
    await this.updateRelatedTables(Work, id, workExp);
    await this.updateRelatedTables(Education, id, educ);
    await this.updateRelatedTables(Certificate, id, certif);
    await this.updateRelatedTables(Adward, id, award);
    await this.updateRelatedTables(Volunteering, id, voluntering);
    await this.updateRelatedTables(Publication, id, publ);

    return this.getAll(userId);
  }

  async delete(id, ids, userId) {
    if (id) {
      await Resume.destroy({ where: { id } });
    } else {
      await Resume.destroy({ where: { id: ids } });
    }
    return this.getAll(userId);
  }

  async clone(id, userId) {
    const originalResume = await Resume.findByPk(id);
    return await this.create(userId, originalResume.info);
  }

  async updateResumeField(id, ids, userId, isArchive) {
    if (id) {
      await Resume.update({ isArchive }, { where: { id } });
    } else {
      await Resume.update({ isArchive }, { where: { id: ids } });
    }
    return this.getAll(userId);
  }

  async archive(id, ids, userId, isArchive) {
    return this.updateResumeField(id, ids, userId, "isArchive", isArchive);
  }

  async favorite(id, userId, isFavorite) {
    console.log("FAV:", isFavorite);
    await Resume.update({ isFavorite }, { where: { id } });
    return this.getAll(userId);
  }
}

module.exports = new ResumeService();
