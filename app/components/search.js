var React = require('react');

var search = React.createClass ({
	
	render: function(){
	return (
		<div className= "Search">
			<div className="row">
				  <div className="col-lg-6">
				    <div className="input-group">
				      <span className="input-group-btn">
				        <button className="btn btn-default" onClick = {this.props.handleclick} type="button">Go!</button>
				      </span>
				    </div>
				</div>
				  <div className="col-lg-6">
				    <div className="input-group" id = "saved-display">
				        <button className="btn btn-default" type="button">Save!</button>
				      
				   
				    </div>
				  </div>
			</div>
			<div className= "search">
					
					<div className="row">
						
						<div className= "col-md-6">
						
							<div id = "search-display" className="panel panel-primary">Search
					
						</div>

					</div>	

				</div>
			</div>
		</div> 
		);

		}
	});
	module.exports = search;
