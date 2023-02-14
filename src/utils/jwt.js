const jwt = require('jsonwebtoken');
require('dotenv/config');

const TOKEN_SECRECT = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = ({ id, displayName, email }) => 
  jwt.sign({ id, displayName, email }, TOKEN_SECRECT, jwtConfig);

const authenticateToken = async (token) => {
  if (!token) {
    const error = new Error('missing auth token');
    error.status = 401;
    throw error;
  }
  try {
    const decoded = await jwt.verify(token, TOKEN_SECRECT);
    return decoded;
  } catch (err) {
    const error = new Error('jwt malformed');
    error.status = 401;
    throw error;
  }
};

module.exports = {
  generateToken,
  authenticateToken,
};