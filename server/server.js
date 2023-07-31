const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});


//connecting database
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is started on PORT : ${process.env.PORT}`);
});

//unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
