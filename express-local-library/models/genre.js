var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var book_genre = new Schema(
    {
        name:{type:String, required: true, min:3, max:100}
    }
);

book_genre
.virtual('url')
.get(function(){
    return '/catalog/genre/'+this._id;
});

module.exports = mongoose.Model('Genre', book_genre);
