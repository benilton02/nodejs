const express = require("express")
const router = express.Router()

router.get("/hello", (request, response, next) => {
    response.status(200).end("Hello World!")
})

router.get("/produto", (request, response, next) => {
    response.status(200).send("Method GET")
})

router.post("/produto", (request, response, next) =>{
    const {produto} = request.body
    response.status(201).json({produto})
    console.log({produto})
})

router.get("/produto/:id_produto", (request, response, next) => {
    const id  = request.params.id_produto
    if (id == "pro"){
        response.status(200).send("Produto com desconto")
        console.log("Produto com desconto")
    }
    else{
        response.status(200).send("Produto sem desconto")
        console.log("Produto sem desconto")
    }
  
})

router.delete("/produto/:id_produto", (request, response, next) => {
    const produto = request.params.id_produto
    response.status(200).json({
        "produto":`${produto}`,
        "status":"removido"
    })
})

router.put("/produto/:id_produto", (request, response, next) => {
    const {produto} = request.params.id_produto
    response.status(201).json({
        "produto":`${produto}`,
        "status":"atualizado"
    })
})


module.exports = router