const express = require("express")
const routesCotroller = require("../controllers/routes")
const router = express.Router()

router.get("/all", routesCotroller.all)

router.get("/find/:id",routesCotroller.find)

router.post("/create", routesCotroller.create)

router.put("/update/:id", routesCotroller.update)

router.delete("/delete/:id", routesCotroller.delete)

module.exports = router