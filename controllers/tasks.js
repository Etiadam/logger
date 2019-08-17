const Task = require('../models/task');

exports.findTaskById = (req, res) => {
    let { task = null } = req.body;
    Task.find({ _id: { $eq: task }}) 
        .then(docs => res.json(docs))
        .catch(err => console.log(`query error: ${err}`))
};