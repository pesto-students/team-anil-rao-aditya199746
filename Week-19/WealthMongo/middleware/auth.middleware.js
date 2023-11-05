const jwtToken=require("jsonwebtoken")
const {dbDetails}=require("../config")
const UserService=require("../sevices/user.sevice")

const authenticate=async (req,res,next)=>{
    try{        
        const token=req.cookies.jwt
        const verifyUser=jwtToken.verify(token,dbDetails.secreteKey)
        if(!verifyUser)
        {
            return res.status(401).send(err)
        }
        const user=await UserService.getUserById(verifyUser._id)

        req.token=token
        req.user=user
        next()

    }
    catch(err){
        res.status(500).send(err)
    }
}

module.exports= authenticate