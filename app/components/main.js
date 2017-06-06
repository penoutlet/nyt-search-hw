// build a page with bootstrap that has a search component

var React = require('react');


var Saved = require('./saved');
var Search = require('./search');
var Footer = require('./footer');
var helpers = require('../utils/helpers');
var newTitle= "";
var newLink="";
var newDate="";
var jumboStyle = {
		color: 'white',
		backgroundImage: 'url(https://media.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)'
	};
var pageStyle = {
		backgroundImage: 'url(https://media.giphy.com/media/lXiRLb0xFzmreM8k8/giphy.gif)'
}
var main = React.createClass({ 
	getInitialState: function(){
		return{
			text: "",
			title:"",
			date: "",
			link: ""

		}
	
	},
	setParent: function(newText){
		this.setState({
			text:newText,
			title: newTitle,
			date: newDate,
			link: newLink
		});
	console.log(newText);
	},
	

 // componentDidUpdate: function(prevState) {
 //    console.log("COMPONENT UPDATED");
 //  if (prevState.title !== this.state.title) {

 //    // We will check if the click count has changed...

 //      // If it does, then update the clickcount in MongoDB
 //      helpers.saveArticles({ title: {this.state.title}, date: {this.state.date}, link: {this.state.link}});
 //        .then(function() {
 //          console.log("Posted to MongoDB");
 //        });
 //    }
 
	handleclick: function (){
		
		
		// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var resultArray=[];
var search_display = [];
// var query= {this.text} ;
// console.log(query);
		url += '?' + $.param({
		  'api-key': "e95af03f7d094d26b03a6c76b2ed13d6",
		  'q': "query"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
		  console.log(result);
	// for (var i = 0; i<result.response.docs.length; i++){
	// 	resultArray.push(result.response.docs[i]);	

	// }		 
		 		   
		  for (var i = 0; i < result.response.docs.length; i++){
			 resultArray.push(result.response.docs[i].headline.main + "|" + result.response.docs[i].pub_date + "|" + result.response.docs[i].web_url +"|")
		  		// var hr = JSON.stringify(<hr></hr>);
			console.log(resultArray.length);
			console.log(result.response.docs.length);
			var str1 = "search-display";
			var str2 = [i];
			var string = str1.concat(str2); 
		   search_display.push(string);
		   console.log(search_display);
	   		document.getElementById(search_display[i]).append(JSON.stringify(resultArray[i]));
	   		// this.setState({title: result.response.docs[i].headline.main});
	   		newTitle = result.response.docs[i].headline.main;
	   		newDate = result.response.docs[i].pub_date;
	   		newLink=  result.response.docs[i].web_url;

		 }

	   
		  }).fail(function(err) {
		  throw err;
});

	console.log("new Title" + newTitle);
	},

	saveFunction: function(){
		helpers.saveArticles({ title:newTitle , date: newDate, link: newLink})
        .then(function() {
          console.log("Posted to MongoDB");
        });
	  
	},
	
		render: function () {

// handleclick = {this.handleclick}
// createButtons = {this.createButtons}
// setParent= {this.setParent}
	return (
		
		<div className = "container1" style={pageStyle}>
			<div className='jumbotron' style= {jumboStyle}>
				<h2> NYTimes Search </h2>
			

		</div>
				<div className="row">
				<Search   handleclick = {this.handleclick}  save=  {this.saveFunction}
				/>
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
