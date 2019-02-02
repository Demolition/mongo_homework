const userRoutes = require('./user.route');
const express = require('express');
const router = express.Router();
const articleRoutes = require('./article.route');

router.use('/user', userRoutes);
router.use('/article', articleRoutes);

module.exports = router;
