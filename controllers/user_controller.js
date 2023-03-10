const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/UserModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return next(new ErrorHandler("Please enter all the details.", 400));
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  sendToken(user, 201, res, "User registered successfylly");
});
