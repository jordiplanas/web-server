module.exports=function(){
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

return middleware;

}