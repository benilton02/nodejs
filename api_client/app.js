const express = require("express")
const morgan = require("morgan")
const clientRouter = require("./src/routes/client")
const notFound = require("./src/routes/error")
const app = express()
const client = "/client"

app.use(morgan('dev'))

app.use(express.json())

app.use(client, clientRouter)

app.use(notFound.error)

app.use(notFound.errorResponse)

module.exports = app