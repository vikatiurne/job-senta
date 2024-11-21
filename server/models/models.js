const sequelize = require("../dbAdmin");
const {DataTypes} = require('sequelize');

const UserLanding = sequelize.define("userLanding", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: false},
    email:{type: DataTypes.STRING, unique: true},
})

const User = sequelize.define("user", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: false},
    lastName:{type: DataTypes.STRING, unique: false},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING, unique: false},
    role:{type: DataTypes.JSON, defaultValue: "USER"}
})

module.exports = {
    UserLanding,
    User
}