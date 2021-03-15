const express = require("express")
const data = require("./data.json")

const app = express() 
const host = "0.0.0.0"
const port = 3000

app.get("/all", (request, response) => {
    console.log("Ok")
    response.json(data)
})

app.listen(port, () => {
    console.log(`Server running at -> http://${host}:${port}`)
})