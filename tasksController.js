var fs = require('fs');

module.exports.get = function(req, res) {
    debugger;
    var todoid = req.params.id;
    //console.log("Todo ID: " + todoid);
    var task = fs.readFileSync('app/data/tasks.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(task);
};

module.exports.getAll = function(req, res) {
    //console.log("getAll() was called.");
    var task = fs.readFileSync('app/data/tasks.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(task);
};

module.exports.save = function(req, res) {
    var task = req.body;
    //console.log("save() was called.");
    fs.writeFileSync('app/data/tasks.json', JSON.stringify(task));
    res.send(task);
};