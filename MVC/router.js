const newUser = require("./model");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = "uiuIUJKjkjHJVGHV^767%%&";

router.post("/signup", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hastPass = await bcrypt.hash(req.body.password, salt);

  const data = await newUser.create({
    name: req.body.name,
    email: req.body.email,
    password: hastPass,
  });
  res.status(201).json(data);
});

router.post("/login", async (req, res) => {
  const user = await newUser.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.status(404).send("User doesn't exit");
  }

  const passChecker = await bcrypt.compare(req.body.password, user.password);
  if (!passChecker) {
    res.status(404).send("Wrong Password");
  }

  const checker = jwt.sign({ _id: user._id }, SECRET);
  res
    .header("auth_checker", checker)
    .json({ token: checker, mgs: "You are Welcome" });
  // res.status(201).send("You are Welcome");
});

module.exports = router;
