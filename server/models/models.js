const sequelize = require("../dbAdmin");
const {DataTypes} = require('sequelize');

const UserLanding = sequelize.define("userLanding", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: false},
    email:{type: DataTypes.STRING, unique: true},
})


module.exports = {
    UserLanding
}