var express = require('express');
var app = express();
var middleware={
	requireAuthentication : function( req,res,next){
		console.log('private!');
		next();

	},
	logger: function(req,res,next){
		var d= new Date();
		console.log(req.method+' '+ d.toString());
		next();
	}

};

app.use(middleware.logger);

app.get('/about', function (req, res) {
  res.send('Hello About!');
});

app.use(express.static(__dirname + '/public'));

app.listen(4000, function () {
  console.log('Example app listening on port 3000!');
});