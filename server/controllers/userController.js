const ErrorHandler = require("../utils/errorHandle");
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register user
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profileURL",
    },
  });

  sendToken(user, 201, res);
});

//Login user
exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  //checking if user has given email and password both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter email and password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email and password", 401));
  }

  const isPasswordMatched = user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email and password", 401));
  }

  sendToken(user, 200, res);
});

//logout user
exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out ",
  });
});
