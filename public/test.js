

// xhr.setRequestHeader('Authorization', null);
// xhr.setRequestHeader('Authorization', ' ');
$(document).ready(function(){

handleclick = function (){
		var query = '"' + $("search").val().trim() + '"';
		// Built by LucyBot. www.lucybot.com
		var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + $.param({
		  'api-key': "e95af03f7d094d26b03a6c76b2ed13d6",
		  'q': "Trump"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
		  console.log(result);
		}).fail(function(err) {
		  throw err;
});		var buttons = 
								<button type="button" class="btn btn-default btn-lg">
							  		<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Save!	</button>
								<button type="button" class="btn btn-default btn-lg">
									<span class="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete!	</button>;
					 
		var resultsDiv = ("<div id = results> </div>");
			resultsDiv.append(response);
			getElementById("display").append(resultsDiv);
		
$("#search-button").on('click',function (){
event.preventDefault();	

	handleclick();
});
});
