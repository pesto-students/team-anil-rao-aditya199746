const userService = require("../sevices/user.sevice")
const authService=require("../sevices/auth.service")
const bcrypt = require("bcryptjs")

const registerUser=async (req,res)=>{
    try {
        const {username,email,password}=req.body
        const payload={
            username,email,password}

            const registerUser =await userService.creteNewUser(payload)
            const token =await authService.getAuthToken(registerUser._id)
            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 300000),
                httpOnly: true
            })
            res.status(201).json({success:true})
    } catch (error) {
        res.status(400).send(error)
    }
}

const loginUser=async(req,res)=>{
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await userService.getUserByEmail(email)
        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
            return res.send("password or email incorrect")
        }

        const token = await authService.getAuthToken(user._id)

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 300000),
            httpOnly: true,
        })
        return res.status(201).json({key:token})
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = {
    loginUser,
    registerUser
}