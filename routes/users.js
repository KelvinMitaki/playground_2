const route = require("express").Router();
const User = require("../models/User");

route.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const age = req.body.age;
    const user = new User(email, name, password, age);
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
route.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.find({ email, password });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
