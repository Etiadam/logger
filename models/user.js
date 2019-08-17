var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//to add test user
userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    description: {type: String, required: false},
    admin: {type: Boolean, required: true},
    tests: [{
        status: {type: String, required: true, enum: ['pristine', 'inProgress', 'finished']},
        test: {type: Schema.Types.ObjectId, ref: 'Test', required: true},
        capture: {type: Schema.Types.ObjectId, ref: 'Capture', required: false,},
        _id: false, // This is to prevent the adding of the _id automatically (array-nested-sub-objects may create it)
    }],
});

var User = mongoose.model('User', userSchema);

// set up a mongoose model and pass it using module.exports
module.exports = User;
