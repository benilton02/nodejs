const express = require("express")
const router = express.Router()

router.get("/all", (request, response) => {
    response.status(200).end("OK")
})

module.exports = router