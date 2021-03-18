const express = require("express")
const clientRouter = require("./route/client")


const app = express()

app.use("/", clientRouter)

module.exports = app