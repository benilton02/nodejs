require("dotenv").config()
const http = require("http")
const app = require("./app")

const port = process.env.container_port
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server Running...`)
})