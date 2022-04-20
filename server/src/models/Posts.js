const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Posts = new Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
});

const PM = mongoose.model("Posts", Posts, "Posts");

module.exports = PM;
