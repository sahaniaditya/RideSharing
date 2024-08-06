/* import various modules */
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require('dotenv').config();
const express = require("express");
const { body, validationResult } = require("express-validator");

/* import the User Model */
const User = require("../models/User");
const router = express.Router();

var JWT_SECRET = "ride-sharing";
/* import fetchUser module */
var fetchUser = require("../middleware/fetchUser");
var success = false;



/* password validation */


const passwordValidation = body('password').custom(value => {
  // Check if the password is at least 8 characters long
  if (value.length < 8) {
      throw new Error('Password must be at least 8 characters long');
  }
  // Check if the password includes at least one uppercase letter
  if (!/[A-Z]/.test(value)) {
      throw new Error('Password must include at least one uppercase letter');
  }
  // Check if the password includes at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      throw new Error('Password must include at least one special character');
  }
  return true;
});

/* password validation ends */

/* router to create user in the database */
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    // body("password", "Enter a valid password").isLength({ min: 8 }),
    passwordValidation

  ],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //generating the salt and hash
    var salt = await bcrypt.genSalt(10);
    var secPass = await bcrypt.hash(req.body.password, salt);
    //waiting for the data to return

    try {
      var user = await User.findOne({  
        email: req.body.email,
      });
      if (user) {
        return res.status(400).json({ success : success,error: "Email already exists" });
      }
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      /*working with JWT Token
       */
      var data = {
        user: user.id,
      };
      var jwtData = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({success : success,"auth-token":jwtData});
    } catch (error) {
      res.send("Opps! There is some error.");
    }
  }
);

/* router for login */
router.post(
  "/login",
  [
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Enter a valid Password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //validating the email and password on the basis of above parameters
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      //finding the user with that email
      var user = await User.findOne({ email: email });
      if (!user) {
        success = false;
        return res.status(400).json({success:success,error : "Login with correct Credentials."});
      }
      //comparing the password entered and password of the user.
      const passCompare = await bcrypt.compare(password,user.password)
      if(!passCompare){
        success = false;
        return res.status(400).json({success:success,error : "Login with correct Credentials."});
      }
      //sending the auth token
      var data = {
        user: user.id,
      };
      var jwtData = jwt.sign(data, JWT_SECRET);
      success = true;

     return  res.json({success : success,authtoken : jwtData});

    } catch (error) {
      // catching and printing the error in login
      res.json({error : "Opps! There is some error : " + (error.message) });
    }
  }
);

//getuser router : to get the details of the user
router.post("/getuser",fetchUser, async (req,res)=>{
  try{
    var userId = req.user;
  const userData = await User.findById(userId).select("-password");
  res.send(userData);
  }
  catch(error){
    res.status(500).send("Some error occured");
  }
  


});
module.exports = router;