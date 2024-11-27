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
  role: { type: DataTypes.JSON, defaultValue: "USER" },
});

const Token = sequelize.define("token", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
  refreshToken: { type: DataTypes.STRING(1254), allowNull: false },
  accessToken: { type: DataTypes.STRING(1254), allowNull: false },
});

User.hasOne(Token);
Token.belongsTo(User);

module.exports = {
  UserLanding,
  User,
  Token,
};
