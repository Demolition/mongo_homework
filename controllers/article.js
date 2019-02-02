const Article = require('../models/article');
const User = require('../models/user');

module.exports = {
    createArticle,
    deleteArticle,
    updateArticle,
    getArticle
};

function createArticle(req, res, next) {
    Article.create(req.body).then(function (article) {
        res.send(article);
    }).catch(next);

}


function getArticle(req, res, ) {
    Article.find({
        title: req.body.title

    }).populate('owner').then(function (articles) {
        res.send(articles);
    });
}

function updateArticle(req, res,) {
    Article.updateOne({_id: req.params.articleId}, req.body).then(function () {
        Article.findOne({_id: req.params.articleId}).then(function (article) {
            res.send(article);
        });
    });
}


function deleteArticle(req, res,) {
    Article.deleteOne({_id: req.params.articleId}).then(function (article) {
        res.send(article);
    });

}



