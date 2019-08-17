var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var testSchema = Schema({
    name: {type: String, required: true, unique: true},
    date: {type: String},
    tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
});

var Test = mongoose.model('Test', testSchema);

// set up a mongoose model and pass it using module.exports
module.exports = Test;
