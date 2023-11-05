// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    return User;
};
