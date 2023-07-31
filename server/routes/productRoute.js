const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteproducts,
  getProductsDetails,
} = require("../controllers/productController");
const router = express.Router();

//routes
router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router
  .route("/products/:id")
  .put(updateProducts)
  .delete(deleteproducts)
  .get(getProductsDetails)

module.exports = router;
