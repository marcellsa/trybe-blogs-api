const loginService = require('../services/loginService');

const auth = async (req, res) => {
  // const { email, password } = req.body;
  const authentication = await loginService.authenticate(req.body);
  return res.status(200).json(authentication);
};

module.exports = {
  auth,
};