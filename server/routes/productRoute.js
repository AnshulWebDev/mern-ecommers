const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteproducts,
  getProductsDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

//routes
router.route("/products").get(getAllProducts);
router
  .route("/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteproducts)
  .get(getProductsDetails);

module.exports = router;
