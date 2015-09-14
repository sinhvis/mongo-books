var express = require('express') ;
var router = express.Router() ;
var mongoose = require('mongoose') ;
var Book = mongoose.model('Book');



// router.param('id', function(req, res, next, id) {
// 	console.log("DEBUG: router.param called") ;
// 	Book.findOne({ _id: id },
// 		function(err, book) {
// 			if(err) return res.status(500).send({ err: "Error inside the server"});
// 			if(!movie) return res.status(400).send({ err: "That book does not exist"}) ;
// 			req.book = book ;
// 			console.log(book) ;
// 			next() ;
// 		}) ;
// }) ;


router.get('/', function(req, res) {
	Book.find({})
	.exec(function(err, books) {
		if(err) return res.status(500).send({ err: "error getting all movies "}) ;
		if(!books) return res.status(500).send({ err:"movies do not exist" }) ;
		res.send(books) ;
	}) ;
}) ;

router.get('/:id', function(req, res) {
	console.log("DEBUG: router.get called") ;
	console.log(req.movie) ;
	res.send(req.movie) ;
}) ;


router.post('/', function(req, res) {
	console.log(req.body);
	var book = new Book(req.body);
	book.save(function(err, result) {
		if(err) return res.status(500).send({ err: "The server is having issues." }) ;
		if(!result) return res.status(400).send({ err: "Could not create that book." });
		res.send({ _id: result._id });
	}) ;
}) ;


module.exports = router ;