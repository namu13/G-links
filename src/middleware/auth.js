const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    // const token = req.header("Authorization").replace("Bearer ", "");
    const token = req.cookies.authToken;

    const user = await User.findByToken(token);

    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(400).redirect("/");
    // res.status(400).json({ success: false, message: "Unable to login" });
  }
};
module.exports = auth;
