const route = require("express").Router();
const User = require("../models/User");

route.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const user = new User(email, name, password);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/login", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
});
