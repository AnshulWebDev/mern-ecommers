const productModels = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandle");
const catchAsyncError = require("../middleware/catchAsyncError");

//create product --Admin
exports.createProduct = catchAsyncError(async (req, res, next) => {
  const product = await productModels.create(req.body);
  res.status(200).json({
    success: true,
    product,
  });
});
//get all products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const products = await productModels.find();
  res.status(200).json({
    success: true,
    products,
  });
});

//update product --Admin
exports.updateProducts = catchAsyncError(async (req, res, next) => {
  let product = await productModels.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await productModels.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});

//delete product
exports.deleteproducts = catchAsyncError(async (req, res, next) => {
  const product = await productModels.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Delete successfully",
  });
});

//get product details
exports.getProductsDetails = catchAsyncError(async (req, res, next) => {
  const product = await productModels.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});
