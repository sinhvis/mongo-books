var mongoose = require('mongoose') ;

var BookSchema = mongoose.Schema({
	title: String,
	author: String,
	postedDate: Date
});

// Make it available to the server
mongoose.model('Book', BookSchema) ;