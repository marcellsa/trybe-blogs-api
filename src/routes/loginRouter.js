const { Router } = require('express');
const loginController = require('../controllers/loginController');

const routers = Router();

routers.post('/', loginController.auth);

module.exports = routers;