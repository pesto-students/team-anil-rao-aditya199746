const db = require("../models")

const Asset = db.assets
const User = db.users
const Transaction = db.transactions

const addTransaction = async (req, res) => {
    let info = {
        user: req.body.user,
        transactionType: req.body.transactionType,
        amount: req.body.amount,
        transactionDate: req.body.transactionDate || new Date(),
        description: req.body.description,
        id: req.body.id
    }

    const transaction = await Transaction.create(info)
    res.status(200).send(transaction)
}

const getAllTransaction = async (req, res) => {
    let transactions = await Transaction.findAll({})
    res.status(200).send(transactions)
}

const getTransactionByID = async (req, res) => {
    let id = req.params.id
    let transaction = await Transaction.findOne({ where: { id: id } })
    res.status(200).send(transaction)
}

const updateTransactionById = async (req, res) => {
    let id = req.params.id
    const transactionToBeUpdated = await Transaction.update(req.body, { where: { id: id } })
    res.status(200).send(transactionToBeUpdated)
}

const deleteTransactionById = async (req, res) => {
    let id = req.params.id
    await Transaction.destroy({ where: { id: id } })
    res.status(200).send("transaction is deleted")
}

module.exports = {
    addTransaction,
    getAllTransaction,
    getTransactionByID,
    updateTransactionById,
    deleteTransactionById
}