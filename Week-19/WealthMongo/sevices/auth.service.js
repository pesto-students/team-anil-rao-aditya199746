const jwt=require("jsonwebtoken")
const UserService = require("./user.sevice")
const {dbDetails}=require("../config")

const getAuthToken = async(userId)=> {
        const token = jwt.sign({ _id: userId.toString() }, dbDetails.secreteKey)
        return token
}

module.exports={
    getAuthToken
}