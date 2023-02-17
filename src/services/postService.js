const Joi = require('joi');
const { User, BlogPost, Category, PostCategory } = require('../models');

const postSchema = Joi.object({
  title: Joi.required(),
  content: Joi.required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const validatePost = ({ title, content, categoryIds }) => {
  const { error } = postSchema.validate({ title, content, categoryIds });
  if (error || !categoryIds.length) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  
  return posts;
};

const validationCategoriId = async (categoryIds) => {
  const xablau = await Promise.all(categoryIds.map((e) => Category.findByPk(e)));
  return xablau.every((id) => id);
};

const create = async ({ id, title, content, categoryIds }) => {
  validatePost({ title, content, categoryIds });
  
  if (!await validationCategoriId(categoryIds)) {
    const e = new Error('one or more "categoryIds" not found');
    e.status = 400;
    throw e;
  }

  const result = await BlogPost.create({
     title, content, userId: id, published: Date.now(), updated: Date.now() });

  const idResult = result.dataValues.id;

  await Promise.all(categoryIds
    .map((item) => PostCategory.create({ postId: idResult, categoryId: item })));

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

const update = async ({ id, title, content, req }) => {
  const post = await PostCategory.findOne(id);
  if (post.userId !== req.userId.id) {
    const error = new Error('Unauthorized user');
    error.status = 404;
    throw error;
  }

  const result = await PostCategory.edit(id, title, content);
  return result;
};

module.exports = {
  getAllPosts,
  create,
  getPostId,
  update,
};