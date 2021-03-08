const os = require('os')

setInterval(() => status(), 1000)

function status(){
    const {freemem, totalmem, platform} = os

    const system = platform() // retorna o sistema 
    const freeMemory = parseFloat((freemem() / 2**20).toFixed(2)) //retorna a quantidade de memoria dispnivel em MB com duas casas decimais
    const totalMemory = parseFloat((totalmem() / 2**20).toFixed(2)) //retorna a quantidade de memoria total em MB com duas casas decimais
    const memoryInUse = parseFloat(((freeMemory / totalMemory)*100).toFixed(2)) // retorna a quantidade de memoria em uso com duas casas decimais

    const status = {
        system: `${system}-os`,
        freeMemory: `${freeMemory} Mb`,
        totalMemory: `${totalMemory} Mb`,
        memoryInUse: `${memoryInUse}%`
    }
    console.clear()
    console.table(status)
}
