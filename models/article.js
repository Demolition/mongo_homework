const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const router = express.Router();



const ProductSchema = new Schema({
    title: {type: String, minlength: 5, maxlength: 400, required: true, createIndexes: true},
    subtitle: {type: String, minlength: 5, required: false},
    description: {type: String, minlength: 5, maxlength: 5000, required: true},
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    category: {type: String, enum:["sport", "games", "history"], required: true},
    createdAt: {type: Date, default: Date.now, required: true},
    updatedAt: {type: Date, default: Date.now, required: true}
});



module.exports = router;
module.exports = mongoose.model('User', ProductSchema);
