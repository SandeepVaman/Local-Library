var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
    {
        title:{type: String, required: true},
        author:{type:Schema.objectId, ref:'Author', required: true },
        summary:{type: String, required: true},
        isbn:{type:String, required: true},
        genre:[{type: Schema.objectId, ref='Genre'}]
    }
);

//Virtual Books URL
BookSchema
.virtual('url')
.get(function(){
    return '/catalog/book/'+ this._id;
});

//Export Model
module.exports = mongoose.model('Book', BookSchema);