var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./controller/routes');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: true
}));

// routing
app.use('/', router);

//listen to port 3000
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});