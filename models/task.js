// get an instance of mongoose and mongoose.Schema
// const db = require('../helpers/db');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var taskSchema = Schema({
    taskType: {type: String, required: true, enum: ['textonly', 'textarea', 'checkbox', 'radiobutton']},
    question: {type: String, required: true},
    name: {type: String, required: true}, // For internal usage, used to remove old versions of tasks when in need.
    image: String,
    config: {
        default: {},
        type: {
            textarea: {
                type: { //This is to enable the field as optional, but if included, it will have required fields.
                    _id: {type: String, required: true},
                    width: {type: Number, required: true, default: -1},
                    height: {type: Number, required: true, default: -1},
                }
            },
            image: {type: String, required: false},
            checkboxes: {
                // Setting the type will show what is in it, we use this form to allow default value.
                type: [{
                    _id: {type: String, required: true},
                    content: String,
                    checked: Boolean,
                }],
                // giving default of void 0 to avoid creation of empty array in case of field the no specified in creation
                default: void 0
            }
            ,
            radiobuttons: {
                // Setting the type will show what is in it, we use this form to allow default value.
                type: [{
                    _id: {type: String, required: true},
                    content: String,
                    checked: Boolean,
                }],
                // giving default of void 0 to avoid creation of empty array in case of field the no specified in creation
                default: void 0
            },
        }
    }
}, {minimize: false});

var Task = mongoose.model('Task', taskSchema);

// set up a mongoose model and pass it using module.exports
module.exports = Task;
