const { User, BlogPost, Category } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  // const posts = 'hsajhdajsk';
  return posts;
};

module.exports = {
  getAllPosts,
};