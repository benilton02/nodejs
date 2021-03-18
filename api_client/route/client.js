const express = require("express")
const data = require("../config/data.json")
const router = express.Router()


router.get("/all", (request, response) => {
    response.status(200).json(data)
})

router.get("/find/:id", (request, response) => {
    const { id } = request.params
    const client = data.find( cli => cli.id == id)
    
    if(!client){
        response.status(204).end()
    }
    else{
        response.status(200).json(client)
    }
    
})

router.post("/create", (request, response) => {
    const { id, name } = request.body
    console.log({id, name})
    
    //save requested data into database

    response.status(201).json({id, name})
})

router.put("/update/:id", (request, response) => {
    const {id} = request.params
    const client = data.find( cli => cli.id == id)

    if(!client){
        response.status(204).end()
        console.log(`Request ID: ${id}`)
    }
    else{
        const {name} = request.body

        // update database
        
        client.name = name
        response.status(201).json(client)
        console.log("Successfully Updated!")
    }
})

router.delete("/delete/:id", (request, response) => {
    const {id} = request.params
    const newData = data.filter(client => client.id != id)
    response.status(200).json(newData)
})

module.exports = router