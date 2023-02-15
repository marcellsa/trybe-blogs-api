const { Router } = require('express');
const userController = require('../controllers/userController');
const { authenticationMiddleware } = require('../middlewares/auth.middleware');

const routers = Router();

routers.post('/', userController.create);

routers.get('/', authenticationMiddleware, userController.getAll);

module.exports = routers;