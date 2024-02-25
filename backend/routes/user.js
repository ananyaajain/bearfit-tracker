const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");

const User = require("../models/User");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  "/signup",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username , email , password } = req.body;
    try {
      console.log("h")
      let user = await User.findOne({
        email,
      });
      console.log("e")
      if (user) {
        return res.status(400).json({
          msg: "User Already Exists",
        });
      }
console.log("l")
      user = new User({
        username: username,
        email: email,
        password: password,
      });
      console.log("l")
      //const salt = await bcrypt.genSalt(10);
      console.log(password)
      //user.password = await bcrypt.hash(password, salt);
      console.log("l")
      await user.save();
      console.log("o")
      const payload = {
        user: {
          id: user.id,
          // Add more fields to the payload
        },
      };

      jwt.sign(
        payload,
        "hash string",
        // Make a new hash String
        {
          expiresIn: 10000,
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token,
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Error in Saving");
    }
  }
);

router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6,
      }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
  console.log("a")
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      console.log("b")
      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email: email,
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist",
          });

      console.log(password)

  console.log(user.password, password)

        const isMatch = await bcrypt.compare(user.password, password);
        if (user.password != password)
          return res.status(400).json({
            message: "Incorrect Password !",
          });
  
        const payload = {
          user: {
            id: user.id,
            // Add more fields to the payload
          },
        };
  
        jwt.sign(
          payload,
          "hash string",
          // Use the same secret string for signing
          {
            expiresIn: 10000,
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error",
        });
      }
    }
  );

  /**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */

router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });

  router.delete("/remove-user", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      const response = await User.deleteOne(user);
      res.json(response);
    } catch (e) {
      res.send({ message: "There was an error with deleting your account." });
    }
  });

  router.put("/update-user", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      console.log(user)
      const response = await User.updateOne({"username" : user.username}, { $set: {"password" : req.body.password}});
      res.json(response);
      
    } catch (e) {
      res.send({ message: "There was an error with updating your information." });
    }
  });

module.exports = router;