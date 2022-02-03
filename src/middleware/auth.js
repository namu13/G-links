const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = await User.findByToken(token);

    req.user = user;
    next();
  } catch (e) {
    res.status(400).json({ success: false, message: "Unable to login" });
  }
};
module.exports = auth;
