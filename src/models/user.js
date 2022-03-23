const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          require: true,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("links", {
  ref: "link",
  localField: "_id",
  foreignField: "owner",
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return "Unable to login";
  }
  return user;
};

userSchema.statics.findByToken = async (token) => {
  try {
    const secretKey = "xvKVFqTVTcb9LkwR";
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findOne({ _id: decoded._id });
    return user;
  } catch (e) {
    throw new Error();
  }
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const secretKey = "xvKVFqTVTcb9LkwR";
  const token = jwt.sign({ _id: user._id.toString() }, secretKey);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
