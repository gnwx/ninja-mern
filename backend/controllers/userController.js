const User = require("../models/userModel");

const loginUser = async (req, res) => {
  res.json({ mssg: "Login user" });
};

const signUpUser = async (req, res) => {
  res.json({ mssg: "Signup user" });
};

module.exports = { loginUser, signUpUser };
