const express = require("express")
const orderController = require("../controller/orderController")
const router = express.Router()

router.get("/pedido", orderController.all)

router.post("/pedido", orderController.create)

router.get("/pedido/:id_pedido", orderController.detail)

router.delete("/pedido/:id_pedido", orderController.candel)

router.put("/pedido/:id_pedido", orderController.update)

module.exports = router