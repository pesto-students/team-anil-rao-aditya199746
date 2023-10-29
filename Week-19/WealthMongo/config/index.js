require('dotenv').config()

module.exports={
    dbDetails:{
        userName:process.env.DB_USER_NAME,
        userPassword:process.env.DB_USER_PASSWORD,
        clusterName:process.env.DB_CLUSTER,
        dbName:process.env.DB_NAME,
        port:process.env.PORT,
        secreteKey:process.env.SECRETE_KEY
    }
}