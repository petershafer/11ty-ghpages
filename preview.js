var express = require('express');
var app = express();
var path = require('path');

var g = require("./global.json");
var subdirectory = g.root;

app.use('/11ty-ghpages', express.static('build'));

app.get('/11ty-ghpages/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

console.log('serving http://localhost:8080' + subdirectory);

app.listen(8080);