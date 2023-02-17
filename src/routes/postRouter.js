const { Router } = require('express');
const postController = require('../controllers/postController');
const { authenticationMiddleware } = require('../middlewares/auth.middleware');

const routers = Router();

routers.post('/', authenticationMiddleware, postController.create);

routers.get('/', authenticationMiddleware, postController.getAllPosts);

routers.get('/:id', authenticationMiddleware, postController.getPostId);

routers.put('/:id', authenticationMiddleware, postController.update);

routers.delete('/:id', authenticationMiddleware, postController.remove);

module.exports = routers;