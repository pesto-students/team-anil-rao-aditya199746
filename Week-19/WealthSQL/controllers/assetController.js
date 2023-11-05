const db = require("../models")

const Asset = db.assets
const User = db.users

const addAsset = async (req, res) => {
    let info = {
        user: req.body.user,
        assetType: req.body.assetType,
        assetName: req.body.assetName,
        assetValue: req.body.assetValue,
        purchaseDate: req.body.purchaseDate || new Date(),
        description: req.body.description,
        id: req.body.id
    }

    const asset = await Asset.create(info)
    res.status(200).send(asset)
}

const getAllAssets = async (req, res) => {
    let assets = await Asset.findAll({})
    res.status(200).send(assets)
}

const getAssetByID = async (req, res) => {
    let id = req.params.id
    let asset = await Asset.findOne({ where: { id: id } })
    res.status(200).send(asset)
}

const updateAssetById = async (req, res) => {
    let id = req.params.id
    const assetToBeUpdated = await Asset.update(req.body, { where: { id: id } })
    res.status(200).send(assetToBeUpdated)
}

const deleteAssetById = async (req, res) => {
    let id = req.params.id
    await Asset.destroy({ where: { id: id } })
    res.status(200).send("asset is deleted")
}

const getAlltransactions = async (req, res) => {
    const data = await User.findAll({
        include: [{
            model: Asset,
            as: "assets"
        }],
        where: { id: 2 }
    })
    res.status(200).send(data)
}

module.exports = {
    addAsset,
    getAllAssets,
    getAssetByID,
    updateAssetById,
    deleteAssetById,
    getAlltransactions
}