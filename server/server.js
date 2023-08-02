const app = require("./app");
require("dotenv").config();
const connectDatabase = require("./config/database");
const cors = require("cors");
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
// Allow all origins (*) during development. For production, replace '*' with your production domain.
const corsOptions = {
  origin: "*",
};

// CORS middleware
app.use(
  cors({
    origin: "*",
    credentials: true, // Enable CORS credentials (cookies)
  })
);

//unhandle promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
