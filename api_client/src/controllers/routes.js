const data = require("../config/data.json")

module.exports = {
    all: (request, response) => {
        response.status(200).json(data)
    },
    find: (request, response) => {
        const { id } = request.params
        const client = data.find( cli => cli.id == id)
        
        if(!client){
            response.status(204).end()
        }
        else{
            response.status(200).json(client)
        }
        
    },
    create: (request, response) => {
        const { id, name } = request.body
        console.log({id, name})
        
        //save requested data into database
    
        response.status(201).json({id, name})
    },
    update:(request, response) => {
        const {id} = request.params
        const client = data.find( cli => cli.id == id)
    
        if(!client){
            response.status(204).end()
        }
        else{
            const {name} = request.body
    
            // update database
            
            client.name = name
            response.status(201).json(client)
        }
    }, 
    delete: (request, response) => {
        const {id} = request.params
        const newData = data.filter(client => client.id != id)
        response.status(200).json(newData)
    }

}