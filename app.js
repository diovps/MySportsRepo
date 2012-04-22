
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var RedisStore = require('connect-redis')(express);
var mongoose = require('mongoose');
var Game = require('./models/game.js');
mongoose.connect('mongodb://localhost/game_db');
// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.session({secret : 'supersecretthing'}, {store: new RedisStore()}));
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.get('/',routes.index);
  app.get('/',function(req,res){
    res.sendfile(_dirname+'/index.html');
  });
  
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

app.post('/',function(req,res){
	console.log("Type: " + req.body.game["type"]);
	console.log("Number of Players: " + req.body.game["numplayers"]);
	console.log("Time: " + req.body.game["time"]);
	console.log("Address: " + req.body.game["address"]);
	console.log("Attitude: " + req.body.game["attitude"]);
	console.log("Notes: " + req.body.game["notes"]);
	
	var u = new Game({type : req.body.game['type'], numplayers: req.body.game["numplayers"],time : req.body.game["time"], address : req.body.game["address"], attitude : req.body.game["attitude"], notes: req.body.game["notes"]});
	
	u.save(function(err) {
	
	});

	Game.find({"type" : "soccer"},function(err,result){
		console.log(result[0]["type"]);
	});
	res.redirect('back');
});

// Routes

app.get('/', routes.index);

app.listen(3000);

console.log("Duper Super listening on port %d in %s mode", app.address().port, app.settings.env);
