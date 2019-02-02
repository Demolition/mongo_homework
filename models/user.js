const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = express.Router();



let UserSchema = mongoose.Schema({

    firstName: {type: String, minLength:4, maxLength: 50, required: true},
    lastName: {type: String, minLength:3, maxLength: 60, required: true},
    role: {type: String, oenum: ['admin', 'writer', 'guest']},
    createdAt: {type: Date, default: Date.now},
    numberOfArticles: {type: Number, default value 0, required: false},
    nickname: {type: String, required: false}

});


module.exports = router;
module.exports = mongoose.model('User', UserSchema);
