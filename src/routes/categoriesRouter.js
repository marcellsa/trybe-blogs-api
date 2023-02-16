const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { authenticationMiddleware } = require('../middlewares/auth.middleware');

const routers = Router();

routers.post('/', authenticationMiddleware, categoryController.create);

routers.get('/', authenticationMiddleware, categoryController.getAll);

module.exports = routers;