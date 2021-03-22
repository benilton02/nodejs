const morgan =  require("morgan")
const express = require("express")
const rotaProdutos = require("./routes/produtos")
const app = express()
const dev = "dev"
const defaultRoute = ""

app.use(morgan(dev))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use((request, response, next) => {
    reponse.header('Acces-Control-Allow-Origin', '*')
    reponse.header(
        'Acces-Control-Allow-Origin', 
        'X-Requested-With',
        'Authorization',
        'Content-Type',
        'Accept',
        'Origin'
    )

    if(request.method === 'OPTIONS'){
        response.header('Acess-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT')
        return response.status(200).end("OK")
    }
    
    next()
})

app.use(defaultRoute, rotaProdutos) 

//Não encontra a rota no servidor
app.use((request, response, next) => {
    const erro = new Error("Not Exist")
    erro.status = 404
    next(erro)
})

app.use((error, request, response, next) =>{
    response.status(error.status || 500)
    return response.send({
      erro:{
          mensagem:error.message
      }  
    })
})

module.exports = app