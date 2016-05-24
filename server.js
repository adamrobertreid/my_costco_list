//SERVER-SIDE javascript

var express = require('express');

var app = express();
var bodyParser = require('body-parser');


app.use(express.static(_dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.use('/vendor', express.static(_dirname + '/bower_components'));

var controllers = require('./controllers');

/*
* HTML endpoints
*/

app.get('/', function homepage (req, res) {
 res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', controllers.api.index);
// lists endpoints
app.get('/api/lists', controllers.lists.index);
app.get('/api/lists/:listId', controllers.lists.show);
app.post('/api/lists', controllers.lists.create);
app.delete('/api/lists/:listId', controllers.lists.destroy);
app.put('/api/lists/:listId', controllers.lists.update);

// listitems endpoints
app.get('/api/lists/:listId/items', controllers.listsItems.index);
app.post('/api/lists/:listId/items', controllers.listsItmes.create);
app.delete('/api/lists/:listId/items/:itemId', controllers.listsItems.destroy);
app.put('/api/lists/:listId/items/:itemId', controllers.listsItems.update);

app.get('/templates/', controllers.api.templates);



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
