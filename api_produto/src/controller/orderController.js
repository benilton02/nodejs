const orderController = {
    all: (request, response, next)  => {
        response.status(200).end("Retorna todos os pedidos")
    },

    create: (request, response, next) => {
        const pedido = {
            id : request.body.id,
            name : request.body.name
        }
        response.status(201).send({
            msg:"Cria um pedido",
            pedido: pedido
        })
    },

    detail: (request, response, next) => {
        const id = request.params.id_pedido
        response.status(200).send({ 
            msg : "Detalhes do pedido",
            pedido: id
        })
    },

    candel: (request, response, next) => {
        const id = request.params.id_pedido
        response.status(200).send({
            msg : "Cancela um pedido",
            pedido: id
        })
    },

    update: (request, response, next) => {
        const id = request.params.id_pedido
        response.status(201).send({
            msg : "Altera um pedido",
            pedido : id
        })
    }

}

module.exports = orderController