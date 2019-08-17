var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var captureSchema = Schema({
    events: [{
        _id: false, // This is to prevent the adding of the _id automatically
        task: {type: Schema.Types.ObjectId, ref: 'Task'},
        inputs: [{
            _id: false, // This is to prevent the adding of the _id automatically
            type: {type: String, required: true, enum: ['keyup', 'keydown', 'submission']},
            content: {type: String},
            key: {type: String},
            timestamp: {type: Number, required: true},
        }],
    }],
});

var capture = mongoose.model('Capture', captureSchema);

// set up a mongoose model and pass it using module.exports
module.exports = capture;
