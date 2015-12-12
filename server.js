var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', 'views/');
app.use(express.static(__dirname + '/public'));

// Your Server Code Here
app.get('/', function(req, res) {
	res.render('index');
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});