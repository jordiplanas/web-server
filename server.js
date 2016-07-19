var express = require('express');
var app = express();
var middleware = require('./middleware.js');
var PORT= process.env.PORT || 4000;
app.use(middleware().logger);

app.get('/about',middleware().requireAuthentication, function (req, res) {
  res.send('Hello About!!!!!');
});
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});