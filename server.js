var express = require('express');
var path = require('path');
var tasks = require('./tasksController');

var app = express();
var rootPath = path.normalize(__dirname);
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(express.static(rootPath + '/app'));

//REST endpoints
app.get('/data/tasks/:id', tasks.get);
app.get('/data/tasks', tasks.getAll);
app.post('/data/tasks', tasks.save);

//Default endpoint
app.get('*', function(req, res) {
    res.sendfile(rootPath + '/app/index.html')
});

app.listen(8000, function() {
    console.log("Server is running on port 8000! (http://localhost:8000)");
});