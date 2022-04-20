const express = require("express");
const PM = require("../models/Posts");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, "../../uploads"));
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname /*+ "-" + Date.now()*/);
//     console.log(file);
//   },
// });

// const upload = multer({ storage: storage });

router.get("/all-posts", (req, res) => {
  PM.find().then((posts) => {
    res.send(posts);
  });
});

router.get("/single-post/:_id", (req, res) => {
  PM.findById({ _id: req.params._id }).then((post) => {
    res.send(post);
  });
});

// router.post("/upload-post", upload.single("image"), (req, res) => {
//   var obj = {
//     title: req.body.title,
//     image: {
//       data: path.join(__dirname + "../../uploads/" + req.file.filename),
//       contentType: "image/png",
//     },
//     description: req.body.description,
//   };
//   PM.create(obj).then((post) => {
//     res.send(post);
//   });
// });

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
