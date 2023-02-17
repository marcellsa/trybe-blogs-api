const { User, BlogPost, Category, PostCategory } = require('../models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return posts;
};

const create = async ({ id, title, content, categoryIds }) => {
  const result = await BlogPost.create({
     title, content, userId: id, published: Date.now(), updated: Date.now() });
     console.log(result);

     const idResult = result.dataValues.id;

  await Promise.all(categoryIds.map((item) => PostCategory.create({ idResult, item })));
  return result.dataValues;
};

const getPostId = async (id) => {
  const postById = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!postById) {
    const error = new Error('Post does not exist');
    error.status = 404;
    throw error;
  }

  return postById;
};

module.exports = {
  getAllPosts,
  create,
  getPostId,
};