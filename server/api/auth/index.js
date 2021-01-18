const authRouter = require('express').Router();
const { signup, login, logout } = require('./auth.controller');

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

module.exports = {
  authRouter
}
