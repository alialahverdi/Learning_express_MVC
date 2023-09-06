const express = require('express');
const userRouter = express.Router();
const usersController = require('../controllers/usersControllers');

userRouter.get('/', usersController.index);

module.exports = userRouter;