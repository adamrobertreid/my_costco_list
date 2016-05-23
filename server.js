//SERVER-SIDE javascript

var express = require('express');

var app = express();
var bodyParser = require('body-parser');


app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.use('/vendor', express.static(_dirname + '/bower_components'));

var controllers = require('./controllers');

app.get('/', function homepage (req, res) {
 res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);

app.get('/api/persons', controllers.persons.index);
app.get('/api/persons/:personId', controllers.persons.show);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
 res.sendFile(__dirname + '/views/index.html');
});

/**********
* SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
