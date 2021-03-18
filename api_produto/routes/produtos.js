const express = require("express")
const router = express.Router()

router.get("/", (request, response, next) => {
    response.status(200).send("Method GET")
})

router.post("/", (request, response, next) =>{
    const {produto} = request.body
    response.status(201).json({produto})
    console.log({produto})
})

router.get("/:id_produto", (request, response, next) => {
    const id  = request.params.id_produto
    if (id == "pro"){
        response.status(200).send("Produto com desconto")
    }else{
        response.status(200).send("Produto sem desconto")
    }
    console.log(id)

})

module.exports = router