const http = require("http")
const app = require("./app")
const port = 3000
const localhost = "localhost"
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server Running => http://${localhost}:${port}`)
})