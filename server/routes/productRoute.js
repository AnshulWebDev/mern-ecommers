const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteproducts,
  getProductsDetails,
  createNewReviewOrUpdate,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//routes
router.route("/products").get(getAllProducts);
router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
  .route("/admin/products/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProducts)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteproducts);

router.route("/product/:id").get(getProductsDetails);
router.route("/review").put(isAuthenticatedUser, createNewReviewOrUpdate);
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

module.exports = router;
