const Joi = require('joi');
const { Category } = require('../models');
const { generateToken } = require('../utils/jwt');

const categorySchema = Joi.object({
  name: Joi.string().required()
  .messages({
    'name.required': '"name" is required',
  }),
});

const validateCategory = ({ name }) => {
  const { error } = categorySchema.validate({ name });
  if (error) {
    const e = new Error(error.message);
    e.status = 400;
    throw e;
  }
};

const create = async ({ name }) => {
  validateCategory({ name });

  const category = await Category.create({ name });
    
  generateToken(category.dataValues);

  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  create,
  getAll,
};