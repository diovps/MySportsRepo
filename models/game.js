var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
	type: String,
	numplayers: String,
	address: String,
	notes: String,
	time: String,
	attitude: String
});

var Game = mongoose.model('Game',GameSchema);

module.exports = Game;
	
