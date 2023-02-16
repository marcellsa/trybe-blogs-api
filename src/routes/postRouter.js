const { Router } = require('express');
const postController = require('../controllers/postController');
const { authenticationMiddleware } = require('../middlewares/auth.middleware');

const routers = Router();

routers.get('/', authenticationMiddleware, postController.getAllPosts);
// routers.get('/', postController.getAllPosts);

module.exports = routers;