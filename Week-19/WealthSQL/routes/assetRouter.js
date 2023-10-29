const assetController = require("../controllers/assetController")

const router = require("express").Router()

router.post("/addAsset", assetController.addAsset)

router.get("/allAsset", assetController.getAllAssets)

router.put("/:id", assetController.updateAssetById)

router.delete("/:id", assetController.deleteAssetById)

router.get("/:id", assetController.getAssetByID)

router.get("/getAssets", assetController.getAlltransactions)

module.exports = router