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
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/room", require("./routes/room.routes"));
app.use("/api/chat", require("./routes/chat.routes"));
app.use("/api/memories", require("./routes/memories.routes"));
app.use("/api/secrets", require("./routes/secrets.routes"));
app.use("/api/rage", require("./routes/rage.routes"));



/* Error Handler */
app.use(errorHandler);

module.exports = app;
