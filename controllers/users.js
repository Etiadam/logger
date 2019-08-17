const mongoose = require('mongoose');
const User = require('../models/user');
const Test = require('../models/test');

exports.getAllUsers = (req, res) => {
    User.find({})
        .then(docs => res.json(docs))
        .catch(err => console.log(`query error: ${err}`))
};

exports.findUsersTask = (req, res) => {
    let { user = null, pass = null } = req.body;
    User.find({ username: { $eq: user } , password: { $eq: pass } }) 
        .then(docs => {
            if (docs[0].tests[0].status != "completed"){
                Test.find({ _id: { $eq: docs[0].tests[0].test }})
                    .then(docs => {
                        console.log(docs[0].tasks)
                        res.json(docs[0].tasks)
                    })
                    .catch(err => console.log(`query error: ${err}`))
            }})
        .catch(err => console.log(`query error: ${err}`))
};