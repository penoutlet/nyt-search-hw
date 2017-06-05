// dependencies
var React = require('react');
var router = require('react-router');
var Route = router.Route;
var Router = router.Router;

// 
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var Main = require('../components/main');
var Saved = require("../components/saved");
var Search = require("../components/search");

module.exports = (
<Router history={hashHistory}>
		<Route path="/" component={Main} >
		<Route path="Saved" component={Saved} />
		<Route path="Search" component={Search} />
	</Route>
</Router>
);
