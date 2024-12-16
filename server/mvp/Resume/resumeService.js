const { where } = require("../../dbAdmin");
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
  async createRelatedTables(data, model, resume, associateMethod) {
    if (data && Array.isArray(data)) {
      const models = await model.bulkCreate(
        data.map((item) => ({ ...item })),
        { returning: true }
      );
      await resume[associateMethod](models);
    }
  }

  async updateRelatedTables(resumeId, model){
    await model.update({where:{resumeId}})
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
    await this.createRelatedTables(
      resume,
      resumeData.projExp,
      Project,
      "addProjects"
    );
    await this.createRelatedTables(
      resume,
      resumeData.workExp,
      Work,
      "addWorks"
    );
    await this.createRelatedTables(
      resume,
      resumeData.educ,
      Education,
      "addEducations"
    );
    await this.createRelatedTables(
      resume,
      resumeData.certif,
      Certificate,
      "addCertificates"
    );
    await this.createRelatedTables(
      resume,
      resumeData.award,
      Adward,
      "addAdwards"
    );
    await this.createRelatedTables(
      resume,
      resumeData.voluntering,
      Volunteering,
      "addVolunteerings"
    );
    await this.createRelatedTables(
      resume,
      resumeData.publ,
      Publication,
      "addPublications"
    );

    return resume;
  }

  async getAll(userId, page, limit, sort) {
    
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
      resumeSort,
      subQuery: false,
    };

    const resumes = await Resume.findAndCountAll({
      where: { userId },
      ...queries,
      attributes: ["id","target", "ifFavorite", "createdAt", "updatedAt"],
      distinct: true,
    });

    return resumes
  }

  async getOne(id) {
    const resume = await Resume.findOne({
      where: { id },
    });
    return resume.info
  }

  async update(id, info) {
    const updatedResume = await Resume.update(
      { info: info },
      { where: { id } }
    );
    await this.updateRelatedTables(Project,id)
    await this.updateRelatedTables(Work,id)
    await this.updateRelatedTables(Education,id)
    await this.updateRelatedTables(Certificate,id)
    await this.updateRelatedTables(Adward,id)
    await this.updateRelatedTables(Volunteering,id)
    await this.updateRelatedTables(Publication,id)
    // await Project.update({where:{resumeId:id}})
    // await Work.update({where:{resumeId:id}})
    // await Education.update({where:{resumeId:id}})
    // await Certificate.update({where:{resumeId:id}})
    // await Adward.update({where:{resumeId:id}})
    // await Volunteering.update({where:{resumeId:id}})
    // await Publication.update({where:{resumeId:id}})
    console.log("updatedResume:", updatedResume)
    return updatedResume
  }
}

module.exports = new ResumeService();
