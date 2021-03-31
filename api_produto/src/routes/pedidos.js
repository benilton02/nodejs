const express = require("express")
const router = express.Router()

router.get("/pedido", (request, response, next)  => {
    response.status(200).end("Retorna todos os pedidos")
})

router.post("/pedido", (request, response, next) => {
    const pedido = {
        id : request.body.id,
        name : request.body.name
    }
    response.status(201).send({
        msg:"Cria um pedido",
        pedido: pedido
    })
})

router.get("/pedido/:id_pedido", (request, response, next) => {
    const id = request.params.id_pedido
    response.status(200).send({ 
        msg : "Detalhes do pedido",
        pedido: id
    })
})

router.delete("/pedido/:id_pedido", (request, response, next) => {
    const id = request.params.id_pedido
    response.status(200).send({
        msg : "Cancela um pedido",
        pedido: id
    })
})

router.put("/pedido/:id_pedido", (request, response, next) => {
    const id = request.params.id_pedido
    response.status(201).send({
        msg : "Altera um pedido",
        pedido : id
    })
})

module.exports = router