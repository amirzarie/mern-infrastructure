const User = require("../../models/user");
const jwt = require("jsonwebtoken");

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

module.exports = {
  create,
};
