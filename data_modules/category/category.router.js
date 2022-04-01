const express = require("express");

const router = express.Router();

const categoryController = require("./category.controller");
const productController = require("../product/product.controller");

router.post("/", categoryController.createCategory);
router.get("/:categoryId/products", productController.getProductsInCategory);
router.put("/:categoryId", categoryController.updateCategory);
router.delete("/:categoryId", categoryController.deleteCategory);

module.exports = router;
