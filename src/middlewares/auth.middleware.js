const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const authenticationMiddleware = async (req, _res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    const error = new Error('Token not found');
    error.status = 401;
    throw next(error);
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET); 
    req.body.user = payload;
    return next();
  } catch (e) {
    const error = new Error('Expired or invalid token');
    error.status = 401;
    return next(error);
  }
};

module.exports = { authenticationMiddleware };