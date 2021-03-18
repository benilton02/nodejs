const express = require("express")
const clientRouter = require("./route/client")
const app = express()

app.use(express.json())

app.use("/client", clientRouter)

module.exports = app