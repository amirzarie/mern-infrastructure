const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

function createJWT(user) {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "24h" });
}

async function create(req, res, next) {
  try {
    const { name, email, password } = req?.body;
    const formData = { name, email, password };
    const user = await User.create(formData);
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json(createJWT(user));
  } catch {
    res.status(400).json("Bad Credentials");
  }
}

module.exports = {
  create,
  login,
};
