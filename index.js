require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRoute = require("./src/routes/todo.route");

//JSON cannot be passed directly into express, so we need to use a middleware to allow json to be passed
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", todoRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(3000);
  })
  .catch(() => {
    console.log("Connection failed");
  });
