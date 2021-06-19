const config = require('config');
const jwtSecret = config.get('jwt_secret')
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) res.status(401).json({'msg': 'no auzorization found!'});
  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch(e) {
    res.status(400).json({'msg': 'token is invalid!'})
  }
}

