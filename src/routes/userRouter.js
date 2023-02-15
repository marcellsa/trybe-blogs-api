const { Router } = require('express');
const userController = require('../controllers/userController');

const routers = Router();

routers.post('/', userController.create);

module.exports = routers;