 // Include React
var React = require("react");

// This is the Form, our main component. It includes the banner and form element
var Form = React.createClass({
getInitialState: function(){
  return { text:""};
},

handleChange: function(event){
	var newState = {};
	newState[event.target.id] = event.target.value;
	this.setState(newState);
	// console.log(newState);
	this.props.setParent(newState);
},
render: function(){
	return (
		<input 
		type='text'
		value={this.state.text}
		className="form-control"
		id='text'
		onChange={this.handleChange}
		required
	/>
)
	}
});
module.exports=Form