const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

if (!uri) {
  const localUri = async () => {
    const { default: localUri } = await import("../../apiKeys.js");
    mongoose
      .connect(localUri)
      .then(() => {
        console.log("connected to database!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  localUri();
} else {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to database!");
    })
    .catch((e) => {
      console.log(e);
    });
}
