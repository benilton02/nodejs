const morgan =  require("morgan")
const express = require("express")
const rotaProdutos = require("./routes/produtos")
const app = express()
const dev = "dev"
const defaultRoute = ""

app.use(morgan(dev))

app.use(express.json())

app.use(defaultRoute, rotaProdutos) 

module.exports = app