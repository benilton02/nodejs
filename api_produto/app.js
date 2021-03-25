const express = require("express")
const morgan = require("morgan")
const rotaProdutos = require("./routes/produtos")
const rotaPedidos = require("./routes/pedidos")
const app = express()
const dev = "dev"
const voidString = ""

app.use(express.json())

app.use(morgan(dev))

app.use(voidString, rotaProdutos)

app.use(voidString, rotaPedidos)

app.use((request, response, next) => {
    const error = new Error("NOT FOUND")
    error.status = 404
    next(error)
})

app.use((error, request, response, next) =>{
    response.status(error.status || 500)
    return response.send({
        erro:{
            msg:error.message
        }
    })
})

module.exports = app;