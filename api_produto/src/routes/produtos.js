const express = require("express")
const productController = require("../controller/productController")
const router = express.Router()

router.get("/hello", productController.hello)

router.get("/produto", productController.all)

router.post("/produto", productController.create)

router.get("/produto/:id_produto", productController.saleOff)

router.delete("/produto/:id_produto", productController.delete)

router.put("/produto/:id_produto", productController.update)


module.exports = router