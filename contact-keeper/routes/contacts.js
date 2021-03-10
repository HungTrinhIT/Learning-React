const express = require("express");

const router = express.Router();

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private
router.get("/", function (req, res) {
  res.send("Get all users");
});

//@route    POST api/contacts
//@desc     Create a contact
//@access   Privates
router.post("/", function (req, res) {
  res.send("Add contact");
});

//@route    PUT api/contacts
//@desc     Update contact
//@access   Private
router.put("/:id", function (req, res) {
  res.send("Update contact");
});

//@route    DELETE api/contacts
//@desc     Delete contact
//@access   Private
router.delete("/:id", function (req, res) {
  res.send("Delete contact");
});
module.exports = router;
