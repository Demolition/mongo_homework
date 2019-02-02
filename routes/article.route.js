const express = require('express');
const router = express.Router();

const articleController = require('../controllers/article');

router.post('/', articleController.createArticle);
router.get('/articles', articleController.getArticle);
router.delete('/articles/:articleId', articleController.deleteArticle);
router.put('/articles/:articleId', articleController.updateArticle);


module.exports = router;
