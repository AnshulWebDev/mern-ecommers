const express = require("express");
const app = express();

app.use(express.json());
//routes Import
const product = require("./routes/productRoute");
const error = require("./middleware/error");

app.use("/api/v1", product);

//middleware for errors
app.use(error)

module.exports = app;
