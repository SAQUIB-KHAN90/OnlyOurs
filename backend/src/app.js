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
app.use("/api/songs", require("./routes/songs.routes"));
app.use("/api/videos", require("./routes/videos.routes"));
app.use("/api/pets", require("./routes/pets.routes"));
app.use("/api/milestones", require("./routes/milestones.routes"));
app.use("/api/goals", require("./routes/goals.routes"));
app.use("/api/reminders", require("./routes/reminders.routes"));
app.use("/api/poetry", require("./routes/poetry.routes"));





/* Error Handler */
app.use(errorHandler);

module.exports = app;
