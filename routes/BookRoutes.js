var express = require('express') ;
var router = express.Router() ;
var mongoose = require('mongoose') ;
var Book = mongoose.model('Book');


router.post('/', function(req, res) {
	console.log(req.body);
	var book = new Book(req.body);
	book.save(function(err, result) {
		if(err) return res.status(500).send({ err: "The server is having issues." }) ;
		if(!result) return res.status(400).send({ err: "Could not create that book." });
		res.send({ _id: result._id });
	}) ;
}) ;

router.get('/', function(req, res) {
	Book.find({})
	.exec(function(err, books) {
		if(err) return res.status(500).send({ err: "error getting all movies "}) ;
		if(!books) return res.status(500).send({ err:"movies do not exist" }) ;
		res.send(books) ;
	}) ;
}) ;

module.exports = router ;