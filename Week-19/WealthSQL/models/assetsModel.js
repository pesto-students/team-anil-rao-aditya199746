// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Assets = sequelize.define("asset", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        assetType: {
            type: DataTypes.STRING,
            enum: ['Equity', 'Fixed Income', 'Alternatives'],
            allowNull: false,
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        assetName: DataTypes.STRING,
        assetValue: DataTypes.INTEGER,
        purchaseDate: DataTypes.DATE,
        description: DataTypes.STRING,
    })

    return Assets
}