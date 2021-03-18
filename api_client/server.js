const express = require("express")
const http = require("http")
const app = require("./app")

const host = "0.0.0.0"
const port = 3000
const server = http.createServer(app)



server.listen(port, () => {
    console.log(`Server running at -> http://${host}:${port}`)
})

// const data = require("./data.json")



// app.use(express.json())

// app.get("/all", (request, response) => {
//     console.log("Ok")
//     response.json(data)
// })

// app.get("/find/:id", (request, response) => {
//     const {id} = request.params
//     const client = data.find(cli => cli.id == id)
    
//     if(!client){
//         response.status(204).json()
//     }
//     else{
//         response.status(200).send(client)
//     }
//     console.log(`Requested ID: ${id}`)
// })

// app.post("/create", (request, response) => {
//     const {id, name} = request.body

//     //save requested data into database

//     console.log({id, name})
//     response.status(201).json({id, name})
// })

// app.put("/update/:id", (request, response) => {
//     const {id} = request.params
//     const client = data.find( cli => cli.id == id)

//     if(!client){
//         response.status(204).end()
//         console.log(`Request ID: ${id}`)
//     }
//     else{
//         const {name} = request.body

//         // update database
        
//         client.name = name
//         response.status(201).json(client)
//         console.log(`Successfully Updated!`)
//     }
// })

// app.delete("/delete/:id", (request, response) => {
//     const {id} = request.params
//     const newData = data.filter( client => client.id != id )

//     console.log("Succesfully Deleted!")
//     response.status(200).json(newData)
// })

