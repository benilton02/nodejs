const express = require("express")
const data = require("./data.json")

const app = express() 
const host = "0.0.0.0"
const port = 3000

app.get("/all", (request, response) => {
    console.log("Ok")
    response.json(data)
})

app.get("/find/:id", (request, response) => {
    const {id} = request.params
    const client = data.find(cli => cli.id == id)
    
    if(!client){
        response.status(204).json()
    }
    else{
        response.status(200).send(client)
    }
    console.log(`Requested ID: ${id}`)
})

app.listen(port, () => {
    console.log(`Server running at -> http://${host}:${port}`)
})