var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
    {
        book:{type:Schema.ObjectId, ref:'Book', required: ture},
        imprint:{type: String, required: true},
        status:{type:String, required: true,  enum:['Available', 'Maintenance', 'Loaned', 'Reserved'], default:'Maintenance'},
        due_back: {tyepe:Date, default: Date.now}
    }
);

BookInstanceSchema
.virtual('url')
.get(function(){
    return '/catalog/bookinstance/' + this.id;
});

module.exports = mongoose.model('BookInstance', BookInstanceSchema);
