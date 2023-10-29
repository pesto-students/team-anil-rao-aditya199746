const db = require("../models")

const Asset = db.assets
const User = db.users
const Transaction = db.transactions

const addUser = async (req, res) => {
    let info = {
        user: req.body.user,
        transactionType: req.body.transactionType,
        amount: req.body.amount,
        transactionDate: req.body.transactionDate || new Date(),
        description: req.body.description,
        id: req.body.id
    }

    const user = await User.create(info)
    res.status(200).send(user)
}

const getTransactionByID = async (req, res) => {
    let id = req.params.id
    let transaction = await Transaction.findOne({ where: { id: id } })
    res.status(200).send(transaction)
}

const getAllAssets = async (req, res) => {
    const data = await User.findAll({
        include: [{
            model: Asset,
            as: "assets"
        }],
        where: { id: 2 }
    })
}


module.exports = {
    addUser,
    getTransactionByID,
    getAllAssets
}