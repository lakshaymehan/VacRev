const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    centerID  : String ,
    username : String,
    body: String,
    rating: Number,
    author:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Review',reviewSchema);