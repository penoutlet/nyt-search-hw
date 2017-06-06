var React = require('react');
var Form = require('./form');


var search = React.createClass ({
	
	getInitialState: function() {
		return{
			text:""
		}
	},
	render: function(){
	// + {this.props.createButtons}
	return (
		<div className= "Search">
			<div className="row">
				  <div className="col-lg-6">
				    <div className="input-group">
				      <span className="input-group-btn">
				        <button id = "Go" className="btn btn-default" onClick = {this.props.handleclick}>Go!</button>
				      </span>
				      <Form setParent={this.props.setParent}/>
				    </div>
				</div>
				  
			</div>
					
				<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display0' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button onClick={this.props.save} className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
		
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display1' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display2' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display3' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
						<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display4' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display5' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display7' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
							<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display8' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
		
					<div className="row">
					<div className= "col-lg-6">
						<div id = 'search-display9' className="panel panel-primary">
				</div>
					</div>
						<div className="col-lg-6">
				    		<div className="input-group" id = "search-display">
				        		<button className="btn btn-default" type="button">Save!</button>
				      
				   
				    	</div>
				  	
				  	</div>		   
			
				</div>
				

			</div>
		
		);

		}
	});
	module.exports = search;
