const express = require("express")
const morgan = require("morgan")
const routeProduct = require("./src/routes/produtos")
const routeOrder = require("./src/routes/pedidos")
const routeNotFound = require("./src/routes/notFound")
const app = express()
const dev = "dev"
const voidString = ""

app.use(express.json())

app.use(morgan(dev))

app.use(voidString, routeProduct)

app.use(voidString, routeOrder)

app.use(routeNotFound.error)

app.use(routeNotFound.errorResponse)

module.exports = app;