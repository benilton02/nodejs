// * JavaScript é uma linguagem executada assincronamente. 
// * isso acontece porque quando o interpretador executa um comando que dependa de uma informação externa, 
// * como uma requisição, ele não bloqueia o prosseguimento do programa.

const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
   
    fs.readFile(
        filePath,
        (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )   

}).listen(5000, () => console.log('Server is running...')) 