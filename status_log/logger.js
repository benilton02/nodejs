const eventEmitter = require('events') // built-in
const fs = require('fs')
const path = require('path')

const emitter = new eventEmitter() // criar uma instancia de 'events'


// esperar a emissão de uma mensagem
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if (err) throw err
    })
})

// função responsável por emitir uma mensagem
function log(message){
    emitter.emit('log', message)
}

module.exports = log