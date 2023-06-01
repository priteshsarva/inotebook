const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const secreatdata = "p#ite$h$a#vatheG#eat"

// Route 1:creating a user in db, no Auth Require
router.post('/createUser',
  [body('name', 'Enter some value idiot').notEmpty().isLength("3"),
  body('email', "Enter Valid Email").isEmail(),
  body("password", "Enter atleast 6 character").isLength({ min: 6 }),
  body("password", "Enter min 10 character").isLength({ max: 10 })
  ],
  async (req, res) => {
    //Recived user data validation and sending bad request if validation has errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    try {
      //Checking Email alredy exist or not
      let user = await User.findOne({ email: req.body.email })
      if (user) {
        return res.status(400).json({ "Error": "User with this email already exist" })
      }
      //Password hasing
      const salt = bcrypt.genSaltSync(10);
      let secpassword = bcrypt.hashSync(req.body.password, salt)
      //Saving User data to Db with Hased Password
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpassword
      })
      //Genrating user Auth Token
      const data = ({ "user": { id: user.id } })
      const authToken = jwt.sign(data, secreatdata)
      return res.json({ authToken })
    } catch (error) {
      // Checking if Any error occured from server side
      console.log("User not Saved");
      return res.status(400).json(error)
    }
  })

//Route 2:User Login, No Auth Require
router.post('/login', [
  body('email', "Enter Valid Email").isEmail(),
  body("password", "Password Field canont be empty").exists(),
],
  async (req, res) => {
    //Recived user data validation and sending bad request if validation has errors
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    const { email, password } = req.body
    try {
      //Checking Email alredy exist or not
      let user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ "Error": "Please Enter Correct credentials" })
      };
      //checking passsword
      const passwordcompare = await bcrypt.compare(password, user.password)
      if (!passwordcompare) {
        return res.status(400).json({ "Error": "Please Enter Correct credentials" })
      }
      //Sending User authToken
      const data = ({ "user": { id: user.id } })
      const authToken = jwt.sign(data, secreatdata)
      return res.json({ authToken })
    } catch (error) {
      // Checking if Any error occured from server side
      console.log("User not Saved");
      return res.status(400).json(error)
    }
  })

// Route 3: Get userDetails
router.post("/getuser",fetchuser, async (req, res) => {

  try {
    const userid = req.user.id
    const user = await User.findById(userid).select('-password')
    res.send(user)
  } catch (error) {
    // Checking if Any error occured from server side
    console.log(error);
    return res.status(400).send("internal Error Occured")
  }
})



module.exports = router