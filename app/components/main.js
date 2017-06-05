// build a page with bootstrap that has a search component

var React = require('react');


var Saved = require('./saved');
var Search = require('./search');
var Footer = require('./footer');



var jumboStyle = {
		color: 'white',
		backgroundImage: 'url(https://media.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)'
	};
var pageStyle = {
		backgroundImage: 'url(https://media.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)'
}
var main = React.createClass({ 
	handleclick: function (){
		var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		$.ajax ({
			method: "GET",
			url: queryurl	
		}).done(function(response){
			var resultsDiv = ("<div id = results> </div>");
			resultsDiv.append(response);
			getElementById("display").append(resultsDiv);
		}).fail(function(err) {

			throw err;
	
	});
	
	},
	// saveToDb: function(){

	// }
		render: function () {

// handleclick = {this.handleclick}
	return (
		
		<div className = "container1" style={pageStyle}>
			<div className='jumbotron' style= {jumboStyle}>
				<h2> NYTimes Search </h2>
			

		</div>
				<div className="row">
				<Search handleclick = {this.handleclick} />
			</div>
				<div className = "row">
				<Saved />
			</div>
			<div className = "row">
				<Footer />
			</div>
	</div>
		
		);
	}
});

module.exports = main;
