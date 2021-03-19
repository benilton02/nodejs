const express = require("express")
const rotaProdutos = require("./routes/produtos")
const app = express()

app.use(express.json())

app.use("", rotaProdutos)

module.exports = app