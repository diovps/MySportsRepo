
/*
 * GET home page.
 */
var Game = require('../models/game.js');

exports.index = function(req, res){
   Game.find({}, function(err,result){
	if(!err)
	    res.render('index', { title: 'Express', result: result})
   });
   //res.render('index', { title: 'Express', result: 'Error connecting to database'})
};


