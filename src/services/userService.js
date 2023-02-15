const Joi = require('joi');
const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required()
  .messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'email.required': '"email" must be a valid email"',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string().allow(null).allow('').optional(),
});

const validateBody = ({ displayName, email, password, image }) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) {
    const e = new Error(error.message);
    e.status = 400;
    throw e;
  }
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });
  return user;
};

const create = async ({ displayName, email, password, image }) => {
  validateBody({ displayName, email, password, image });

  const isThereUser = await findUserByEmail(email);
  if (isThereUser) {
    const error = new Error('User already registered');
    error.status = 409;
    throw error;
  }

  const newUser = await User.create({ displayName, email, password, image });
  
  const token = generateToken(newUser.dataValues);

  return { token };
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

module.exports = {
  create,
  getAll,
};