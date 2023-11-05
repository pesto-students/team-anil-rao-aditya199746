const mongoose = require("mongoose")
// const bcrypt=require("bcryptjs")
// const jwt=require("jsonwebtoken")
// const {dbDetails}=require("../config")

const assetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  assetType: {
    type: String,
    enum: ['Equity', 'Fixed Income', 'Alternatives'],
    required: true,
  },
  assetName: String,
  assetValue: Number,
  purchaseDate: Date,
  description: String,
});
const Asset = new mongoose.model("Asset", assetSchema)

module.exports = Asset