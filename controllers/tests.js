const mongoose = require('mongoose');
const Test = require('../models/test');


exports.getAllTests = (req, res) => {
    Test.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(`query error: ${err}`))
};