// build a page with bootstrap that has a search component

var React = require('react');

var Saved = require('./saved');
var Search = require('./search');

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
		
		<div className = "container1">
			<div className='jumbotron'>
				<h2> NYTimes Search </h2>
			

		</div>
			<div className="row">
			<h2> yo </h2>
			<Search handleclick = {this.handleclick} />
		</div>
			<div className = "row">
			<Saved />
		</div>
	</div>	
		);
	}
});

module.exports = main;
