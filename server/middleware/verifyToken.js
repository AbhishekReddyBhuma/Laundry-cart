const jwt = require("jsonwebtoken");
const secret_key = "ABC";

const verifyToken = (req, res, next) => {
  const token = req.header("Token");
  if (!token) {
    res
      .status(400)
      .json({ message: "please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, secret_key);
    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};
module.exports = verifyToken;
