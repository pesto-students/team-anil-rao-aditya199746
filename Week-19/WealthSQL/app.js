const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
const app = express()
require("./db/conn")
// const dbSerice=require("./services/index")

let corOptions = {
    origin: "https://localhost:8081"
}
const router = require("./routes/assetRouter.js")

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/assets", router)

app.listen("3000", () => {
    console.log("server is running")
})