const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("DB Started Successfully");
    })
};

module.exports = connectDatabase;
