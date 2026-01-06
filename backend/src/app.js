const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/error.middleware");

const app = express();

/* Middleware */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/* Routes */
app.use("/api/health", require("./routes/health.routes"));

/* Error Handler */
app.use(errorHandler);

module.exports = app;
