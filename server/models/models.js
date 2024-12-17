const sequelize = require("../dbAdmin");
const { DataTypes } = require("sequelize");

const UserLanding = sequelize.define("userLanding", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false },
  email: { type: DataTypes.STRING, unique: true },
});

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, unique: false },
  lastName: { type: DataTypes.STRING, unique: false, allowNull: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING, unique: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  resetLink: { type: DataTypes.STRING, defaultValue: "" },
});

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
  refreshToken: { type: DataTypes.STRING(1254), allowNull: false },
  accessToken: { type: DataTypes.STRING(1254), allowNull: false },
});

const Resume = sequelize.define("resume", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  info: { type: DataTypes.JSON, allowNull: true },
  target: { type: DataTypes.STRING, unique: false },
  email: { type: DataTypes.STRING, unique: false },
  phone: { type: DataTypes.STRING, allowNull: false },
  linkedin: { type: DataTypes.STRING, unique: false },
  profSummaries: { type: DataTypes.STRING, unique: false },
  skills: { type: DataTypes.ARRAY(DataTypes.STRING) },
  interests: { type: DataTypes.STRING, unique: false },
  ifFavorite: { type: DataTypes.BOOLEAN, defaultValue: "false" },
  ifArchive: { type: DataTypes.BOOLEAN, defaultValue: "false" },
});

const Project = sequelize.define("project", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: false },
  role: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING },
});

const Work = sequelize.define("work", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  companyName: { type: DataTypes.STRING, unique: false },
  position: { type: DataTypes.STRING },
  dateStart: { type: DataTypes.DATE },
  dateEnd: { type: DataTypes.DATE },
  responsibilities: { type: DataTypes.STRING },
});

const Education = sequelize.define("education", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  educName: { type: DataTypes.STRING, unique: false },
  specialty: { type: DataTypes.STRING },
  dateStart: { type: DataTypes.DATE },
  dateEnd: { type: DataTypes.DATE },
});
const Certificate = sequelize.define("certificate", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  certificateName: { type: DataTypes.STRING },
  institution: { type: DataTypes.STRING },
  dateStart: { type: DataTypes.DATE },
  dateEnd: { type: DataTypes.DATE },
});
const Adward = sequelize.define("adward", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nameAward: { type: DataTypes.STRING },
  institutionAward: { type: DataTypes.STRING },
  merit: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
});
const Volunteering = sequelize.define("voluntering", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  voluntering: { type: DataTypes.STRING },
  dateStart: { type: DataTypes.DATE },
  dateEnd: { type: DataTypes.DATE },
  obligations: { type: DataTypes.STRING },
});
const Publication = sequelize.define("publication", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  publication: { type: DataTypes.STRING },
  date: { type: DataTypes.DATE },
  publicationLink: { type: DataTypes.STRING },
});
const AiAnalyse = sequelize.define("aiAnalise", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  score: { type: DataTypes.STRING },
  cons: { type: DataTypes.STRING },
  recommended: { type: DataTypes.STRING },
});

User.hasOne(Token, { onDelete: "CASCADE" });
Token.belongsTo(User);

User.hasMany(Resume, {
  as: "resumes",
  onDelete: "CASCADE",
  foreignKey: "userId",
});
Resume.belongsTo(User);

Resume.hasMany(Project, { onDelete: "CASCADE" });
Project.belongsTo(Resume);

Resume.hasMany(Work, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "works",
});
Work.belongsTo(Resume);

Resume.hasMany(Education, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "educations",
});
Education.belongsTo(Resume);

Resume.hasMany(Certificate, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "certificates",
});
Certificate.belongsTo(Resume);

Resume.hasMany(Adward, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "adwards",
});
Adward.belongsTo(Resume);

Resume.hasMany(Volunteering, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "volunteerings",
});
Volunteering.belongsTo(Resume);

Resume.hasMany(Publication, {
  onDelete: "CASCADE",
  foreignKey: "resumeId",
  as: "publications",
});
Publication.belongsTo(Resume);

Resume.hasOne(AiAnalyse, { onDelete: "CASCADE" });
AiAnalyse.belongsTo(Resume);

module.exports = {
  UserLanding,
  User,
  Token,
  Resume,
  Project,
  Work,
  Education,
  Certificate,
  Adward,
  Volunteering,
  Publication,
  AiAnalyse,
};
