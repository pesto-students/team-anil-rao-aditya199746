const mongoose = require("mongoose")
const {dbDetails}=require("../config")

mongoose.connect(`mongodb+srv://${dbDetails.userName}:${dbDetails.userPassword}@${dbDetails.clusterName}.mongodb.net/${dbDetails.dbName}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection is successful");
    }).catch((err) => {
        console.error("No connection", err);
    });