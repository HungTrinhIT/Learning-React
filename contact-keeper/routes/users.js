const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post(
  "/",
  [
    body("username", "Username is not empty, please fill in username! ")
      .not()
      .isEmpty(),
    body("email", "Please input a valid email!").isEmail(),
    body(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],

  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      // Check isExist user in DB
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      user = new User({
        username,
        password,
        email,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
