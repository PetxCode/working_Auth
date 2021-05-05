const jwt = require("jsonwebtoken");
const SECRET = "uiuIUJKjkjHJVGHV^767%%&";

const auth = async (req, res, next) => {
  const token = req.header("checker");
  if (!token) {
    return res.status(404).send("Access Denied");
  }
  try {
    const verified = await jwt.verify(token, SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = auth;
