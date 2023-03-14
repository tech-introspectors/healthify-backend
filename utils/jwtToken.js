// Creating token and saving in cookie
const sendToken = (user, statusCode, res, msg) => {
  const token = user.getJWTToken();

  // options for cookies
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    message: msg,
    user,
    token,
  });
};

module.exports = sendToken;
