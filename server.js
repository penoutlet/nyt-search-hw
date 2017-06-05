// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/article");
var exphbs = require("express-handlebars");
var ReactEngine = require('express-react-engine');
var axios = require("axios"); 
var PORT = process.env.PORT || 3000;
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Make public a static dir
// app.use(express.static("public"));

//handlebars boilerplate
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



// Database configuration with mongoose
mongoose.connect((process.env.MONGODB_URI || 'mongodb://localhost/nyt-react'));
var db = mongoose.connection;


// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// no form needed.
app.get("/api/saved", function(req,res){
	Article.find({}), function(err , Article){
	
	if (err) return handleError(err);

	else { 
		res.json(Article);
	}
	};
});

// form submit in index.hbs. 
app.post("/api/saved", function(req,res){
	
	var newArticle = new Article(req.body);
	
	newArticle.save(function(err, Article){
	
		if (err) return handleError(err);

		else { 
			console.log("Article Saved");
		}
	});
});

// should come from a form.
app.delete("api/saved/delete/:id",function (req,res){
	Article.delete({"_id": req.params.id});
});

// get for homepage
// app.get("/", function(req,res){
// 	res.render("index2");
// });

// get for react homepage

app.get('/', function(req, res) {
		
		 res.sendFile(__dirname + '/public/index.html');
		 console.log('working');

});	 

 

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 3000!");
});