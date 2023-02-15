const userService = require('../services/userService');

const create = async (req, res) => {
  // const { displayName, email, password, image } = req.body;
  const token = await userService.create(req.body);
  return res.status(201).json(token);
};

const getAll = async (req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  create,
  getAll,
};