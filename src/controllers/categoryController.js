const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const category = await categoryService.create(req.body);
  return res.status(201).json(category);
};

module.exports = {
  create,
};