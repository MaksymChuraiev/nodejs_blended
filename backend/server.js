const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("../config/db");
const errorHandler = require("./middlewares/errorHandler");
require("colors");

const envPath = path.join("_dirname", "..", "config", ".env");
dotenv.config({ path: envPath });
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", require("./routes/driversRoutes"));
app.use("/api/v1", require("./routes/authRoutes"));
// app.use("/api/v1", require("./routes/teamsRoutes"));

app.use((req, res) => {
  res.status(400).json({ message: "Not found" });
});

app.use(errorHandler);

const { PORT } = process.env;

const server = app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on ${PORT}`.cyan);
});

// process.on("unhandledRejection", async () => {
//   try {
//     await connectDB();
//   } catch (error) {
//     console.log(`error ${error.message}`.red);
//     server.close(() => process.exit(1));
//   }
// });
