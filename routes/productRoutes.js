const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.post("/add", productController.addProduct);
router.get("/", productController.getAllProducts);
router.delete("/:productId", productController.deleteProduct);


module.exports = router;
