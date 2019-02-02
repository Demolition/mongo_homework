module.exports = {
  createUser,
  removeUser,
  updateUser,
  getUser,
  getUserArticles
};

const User = require('../models/user');
const Article = require('../models/article');



router.get('/users/:userId', getUser);
router.post('/users', addUser);
router.delete('/users/:userId', removeUser);
router.post('/:users/:userId', updateUser);
router.get('/users/:userId/articles', getUserArticles);


function createUser(req, res, next) {
  User.create(req.body).then(function (user) {
    res.send(user);
  }).catch(next);
}

function getUser(req, res,) {
  User.find(function (err, user) {
    if (err) return console.error(err);
    res.send(user);
  });
}

/* function addUser(req, res,) {
  if (!req.body._id) {
    const newUser = new User({
      name: req.body.name,
      status: 'waiting',
      date: createDate()
    });

    newUser.save(function (err) {
      if (err) return console.error(err);
      res.send(newUser);
    });
  } else {
    User.update({_id: req.body._id}, { $set: {status: req.body.status}},
        () => { res.send({success: true}); });
  }
} */

function removeUser(req, res) {
  User.deleteOne({_id: req.params._id}, function () {
    res.send({success: true});
  });

}

function updateUser(req, res, next) {
  User.updateOne({_id: req.params.userId}, req.body).then(function () {
    User.findOne({_id: req.params.userId}).then(function (user) {
      res.send(user);
    });
  });
}


function getUserArticles(req, res) {
  Article.find({owner: req.params.userId}).then(function (articles) {
    res.send(articles);
  });
}
