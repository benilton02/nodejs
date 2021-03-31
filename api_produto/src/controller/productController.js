const productController = {
    hello:  (request, response, next) => {
        response.status(200).end("Hello World!")
    },

    all: (request, response, next) => {
        response.status(200).end("Retorna os Produtos")
    },

    create: (request, response, next) => {
        const produto = {
            name:request.body.name,
            price: request.body.price
        }
        response.status(201).send({
            mensagem:"Insere um produto",
            produtoCriado:produto 
        })
    },

    saleOff: (request, response, next) => {
        const id  = request.params.id_produto
        if (id == "pro"){
            response.status(200).send("Produto com desconto")
        }
        else{
            response.status(200).send("Produto sem desconto")
        }
      
    },

    delete: (request, response, next) => {
        const produto = request.params.id_produto
        response.status(200).json({
            "produto":`${produto}`,
            "status":"removido"
        })
    }, 

    update: (request, response, next) => {
        const produto = request.params.id_produto
        response.status(201).json({
            "produto":`${produto}`,
            "status":"atualizado"
        })
    }
}

module.exports = productController