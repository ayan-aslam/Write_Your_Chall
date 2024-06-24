const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  // if you attempt to use an expired token, you'll receive a "401 unauthorized HTTP" response
  if (!token) {
    return res
      .status(401)
      .json({ message: "unauthorized HTTP, Token not provided" });
  }

  //assuming token is in the format "Bearer <jwttoken>, removing the "Bearer" prefix
  const jwtToken = token.replace("Bearer", "").trim();
  console.log(jwtToken);

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });
    console.log(userData)
    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized Invalid token" });
  }

  next();
};
module.exports = authMiddleware;
