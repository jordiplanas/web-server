var express = require('express');
var app = express();
var middleware = require('./middleware.js');

app.use(middleware().logger);

app.get('/about',middleware().requireAuthentication, function (req, res) {
  res.send('Hello About!!!!!');
});
app.use(express.static(__dirname + '/public'));

app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});