const postService = require('../services/postService');
const { authenticateToken } = require('../utils/jwt');

const getAllPosts = async (_req, res) => {
  const posts = await postService.getAllPosts();
  return res.status(200).json(posts);
};

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const { id } = await authenticateToken(authorization);
  const result = await postService.create({ id, title, content, categoryIds });
  return res.status(201).json(result);
};

const getPostId = async (req, res) => {
  const { id } = req.params;
  const postById = await postService.getPostId(id);
  return res.status(200).json(postById);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedPost = await postService.update({ id, title, content, req });
  return res.status(200).json(updatedPost);
};

module.exports = {
  getAllPosts,
  create,
  getPostId,
  update,
};