const mysql=require("mysql2")
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"ANSU1997vivo@2",
    database:"nodeWealth",
})

db.connect((err)=>{
    if(err)
    {
        throw err;
    }
    console.log("conn successful")
})

module.exports=db;