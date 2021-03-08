const eventEmitter = require('events') // built-in
const emitter = new eventEmitter() // criar uma instancia de 'events'


// esperar a emissão de uma mensagem
emitter.on('log', (message) => {
    console.log(message)
})

// função responsável por emitir uma mensagem
function log(message){
    emitter.emit('log', message)
}

module.exports = log