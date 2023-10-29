const db=require("../db/conn")
const createDB=(name)=>{
    let sql=`CREATE DATABASE ${name}`;
    let msg="true"
    db.query(sql,(err,result)=>{
        if(err)
        {
            msg=err
        }
        console.log("result",result)
    })
    return msg
}

const createTable=(name)=>{
    let sql=`CREATE TABLE ${name}`;
}

module.exports={
    createDB
}