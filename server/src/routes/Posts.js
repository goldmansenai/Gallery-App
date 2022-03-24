const express = require("express");
const PM = require("../models/Posts");

const router = express.Router();

router.get("/all-posts", (req, res) => {
  PM.find({}).then((posts) => {
    res.send(posts);
  });
});

router.get("/single-post/:_id", (req, res) => {
  PM.findById({ _id: req.params._id }).then((post) => {
    res.send(post);
  });
});

router.post("/create-post", (req, res) => {
  PM.create(req.body).then((post) => {
    res.send(post);
  });
});

router.put("/update-post/:_id", (req, res) => {
  PM.findByIdAndUpdate({ _id: req.params._id }, req.body).then(() => {
    PM.findById({ _id: req.params._id }).then((post) => {
      res.send(post);
    });
  });
});

router.delete("/delete-post/:_id", (req, res) => {
  PM.findByIdAndRemove({ _id: req.params._id }).then(() => {
    res.send("Post Deletado");
  });
});

module.exports = router;
