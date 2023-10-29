// const { DataTypes } = require("sequelize");
// const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("transaction", {
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transactionDate: DataTypes.DATE,
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        transactionType: {
            type: DataTypes.STRING,
            enum: ['Income', 'Expense', 'Savings'],
            allowNull: false,
        },
        amount: DataTypes.INTEGER,
        description: DataTypes.STRING,
    })

    return Transaction
}