const express = require("express")
const morgan = require("morgan")
const clientRouter = require("./src/routes/client")
const app = express()
const client = "/client"

app.use(morgan('dev'))

app.use(express.json())

app.use(client, clientRouter)

app.use((request, response, next) => {
    const error = new Error("NOT FOUND")
    error.status = 404
    next(error)
})

app.use((error, request, response, next) => {
    response.status(error.status || 500)
    return response.send({
        erro:{
            msg: error.message
        }
    })
})

module.exports = app