const express = require("express")
const rotaProdutos = require("./routes/produtos")
const app = express()

app.use(express.json())

app.use("/produtos", rotaProdutos)

app.use("/hello",(request, response, next) => {
    response.status(200).send("OK")
})

module.exports = app