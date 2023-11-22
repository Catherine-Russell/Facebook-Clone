const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const JWT = require("jsonwebtoken");
//so browser can access images stored in port 8080 where server runs
const cors = require("cors");

const postsRouter = require("./routes/posts");
const authenticationRouter = require("./routes/authentication");
const usersRouter = require("./routes/users");
const uploadsRouter = require("./routes/uploads");

// library which saves files uploaded by the user on our server
const multer = require("multer");
const app = express();
app.use(cors());

// setup for receiving JSON
app.use(express.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
// TODO: creating static routes for all images uploaded by users to serve them later
// each image can be accessed at http://localhost:8080/uploads/image.jpg
// __dirname refers to the directory of the current module
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// middleware function to check for valid tokens.p
const tokenChecker = (req, res, next) => {
  let token;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    token = authHeader.slice(7);
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      res.status(401).json({ message: "auth error" });
    } else {
      req.user_id = payload.user_id;
      next();
    }
  });
};

// route setup
app.use("/posts", tokenChecker, postsRouter);
app.use("/posts/image", tokenChecker, postsRouter);
app.use("/tokens", authenticationRouter);
app.use("/users", usersRouter);
app.use("/users/profile/:user_id", tokenChecker, usersRouter);
//new route for posting avatar change
app.use("/users/avatar", usersRouter);
app.use("/upload", uploadsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // respond with details of the error
  res.status(err.status || 500).json({ message: "server error" });
});

module.exports = app;
