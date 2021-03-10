const express = require("express");

const router = express.Router();

//@route    GET api/auth
//@desc     Get logged in user
//@access   private
router.get("/", function (req, res) {
  res.send("Get logged in a user");
});

//@route    POST api/auth
//@desc     Auth user  & get token
//@access   Public
router.post("/", function (req, res) {
  res.send("Log in a user");
});

module.exports = router;
