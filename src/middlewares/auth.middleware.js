const { authenticateToken } = require('../utils/jwt');

const authenticationMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  const token = await authenticateToken(authorization);

  if (!token) {
    const error = new Error({ message: 'Token not found' });
    error.status = 401;
    throw error;
  }

  try {
    req.body.user = token;
    next();
  } catch (e) {
    const error = new Error({ message: 'Expired or invalid token' });
    error.status = 401;
    throw error;
  }
};

module.exports = authenticationMiddleware;