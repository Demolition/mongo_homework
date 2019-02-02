const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.get('/users/:userId', userController.getUser);
router.delete('/users/:userId', userController.removeUser);
router.get('/users/:userId/articles', userController.getUserArticles);

module.exports = router;
