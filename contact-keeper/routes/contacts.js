const express = require("express");
const { body, validationResult } = require("express-validator");
const Contact = require("../models/Contact");
const router = express.Router();
const auth = require("../middleware/auth");

//@route    GET api/contacts
//@desc     Get all users contacts
//@access   Private
router.get("/", auth, async function (req, res) {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

//@route    POST api/contacts
//@desc     Create a contact
//@access   Private
router.post(
  "/",
  [auth, [body("name", "Name is not empty").not().isEmpty()]],
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors) {
      res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route    PUT api/contacts
//@desc     Update contact
//@access   Private
router.put("/:id", auth, async function (req, res) {
  const { name, email, phone, type } = req.body;

  const contactFields = {};
  if (name) contactFields.name = name;
  if (email) contactFields.name = email;
  if (phone) contactFields.name = phone;
  if (type) contactFields.name = type;

  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) res.status(400).json({ msg: "Contact not found" });

    // Make sure user owns contact
    if (contact.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "Not authoried" });
    }

    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: contactFields },
      { new: true }
    );

    res.json(contact);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

//@route    DELETE api/contacts
//@desc     Delete contact
//@access   Private
router.delete("/:id", auth, async function (req, res) {
  try {
    let contact = await Contact.findById(req.params.id);
    console.log(contact);
    if (!contact) {
      res.status(404).json({ msg: "Contact not found" });
    }

    // Make sure the user own contact
    if (contact.user.toString() !== req.user.id) {
      res.status(401).json({ msg: "Not authorized" });
    }

    await Contact.findByIdAndRemove(req.params.id);
    res.json({ msg: "Contact removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
