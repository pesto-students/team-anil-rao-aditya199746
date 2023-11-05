const UserModel = require("../models/User.model")

const getUserById = (id) => {
    return UserModel.findOne({ _id: id })
}

const getUserByEmail = (email) => {
    return UserModel.findOne({ email })
}

const updateUserById = (id, payload) => {
    return UserModel.updateOne({ _id: id }, payload)

}

const creteNewUser=(payload)=>{
    let newUser= new UserModel(payload)
    return newUser.save()
}

module.exports = {
    getUserById,
    getUserByEmail,
    updateUserById,
    creteNewUser
}