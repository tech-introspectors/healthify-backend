const catchAsyncError = require("../middlewares/catchAsyncError");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const jwt = require("jsonwebtoken");

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

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  // find the email and password in database
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  // check that the password is matched with our database by using own define comparePassword method
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  sendToken(user, 200, res, "User login successsfully");
});

exports.logoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// get user details
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next(new ErrorHandler("Missing token", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);

  res.status(200).json({ success: true, user });
});

// ------------------------------------------------------------------
// New update profile endpoint. Do not modify any of the existing functionality.
// ------------------------------------------------------------------
exports.updateProfile = catchAsyncError(async (req, res, next) => {
  const { fullName, weight, height } = req.body;

  // Check for token in header
  const token = req.headers.authorization;
  if (!token) {
    return next(new ErrorHandler("Missing token", 401));
  }

  // Decode token to get the user id.
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Calculate BMI if weight and height are provided.
  let bmi;
  if (weight && height) {
    bmi = Math.round(weight / ((height / 100) * (height / 100)));
  }

  // Update the user.
  const updatedUser = await User.findByIdAndUpdate(
    decoded.id,
    { fullName, weight, height, bmi },
    { new: true, runValidators: true }
  );

  if (!updatedUser) {
    return next(new ErrorHandler("User not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    user: updatedUser,
  });
});
