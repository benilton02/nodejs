const express = require("express")
const http = require("http")
const app = require("./app")

const host = "0.0.0.0"
const port = 3000
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running at -> http://${host}:${port}`)
})