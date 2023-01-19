const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const router = require("express").Router();

const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&:;<>,.?/~_+-=|]).{8,32}$/;

const registerSchema = Joi.object({
  username: Joi.string().min(8).required(),
  password: Joi.string().regex(passwordRegex).min(6).required()
});

const loginSchema = Joi.object({
  username: Joi.string().min(8).required(),
  password: Joi.string().regex(passwordRegex).min(6).required()
});

//register route
router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Check if the user is allready in the db
  const userExists = await User.findOne({ username: req.body.username });

  if (userExists) return res.status(400).send("username allready exists");

  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  //create new user
  const user = new User({
    username: req.body.username,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//login route 
router.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ username: req.body.username });

  if (!user) return res.status(400).send("username or password is wrong");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("username or password is wrong");

  //Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
})
module.exports = router;
