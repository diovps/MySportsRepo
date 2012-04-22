
/*
 * GET home page.
 */
var Game = require('../models/game.js');

exports.index = function(req, res){
   Game.find({}, function(err,result){
	res.render('index', { title: 'Express', result:  result})
   });
};


