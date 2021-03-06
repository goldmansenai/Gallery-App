require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("./uploads/", express.static("uploads"));

const URL = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Mern-Crud-DB";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database: " + URL);
  })
  .catch((err) => {
    console.log(err);
  });

const postRouter = require("./routes/Posts");
app.use("/api/v1/posts", postRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
