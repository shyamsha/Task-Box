import React, { Component } from "react";

import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Dashboard from "./components/home/Dashboard";

import ProjectList from "./components/projects/List";

import ProjectNew from "./components/projects/New";

import ProjectShow from "./components/projects/Show";

import ProjectEdit from "./components/projects/Edit";

import ClientList from "./components/clients/List";

import ClientShow from "./components/clients/Show";

import ClientNew from "./components/clients/New";

import ClientEdit from "./components/clients/Edit";


class App extends Component {
	
render() {

return (

<BrowserRouter>
	
<div>
	
<h4>welcome to Task Box</h4>

<Link to="/"> Dashboard </Link>
		
			{"|"}
	
<Link to="/projects"> Projects </Link>
	
				{"|"}
	
<Link to="/clients"> Clients </Link>
	
	<Switch>

			<Route path="/" component={Dashboard} exact={true} />
	
			<Route path="/projects" component={ProjectList} exact={true} />
		
			<Route path="/clients" component={ClientList} exact />
	
			<Route path="/projects/new" component={ProjectNew} exact={true} />

			<Route path="/clients/new" component={ClientNew} exact={true} />
	
			<Route path="/projects/:id" component={ProjectShow} exact={true} />
		
			<Route path="/clients/:id" component={ClientShow} exact={true} />
			
			<Route path="/projects/edit/:id"
 component={ProjectEdit}
 exact={true}
/>

			<Route
 path="/clients/edit/:id"
	component={ClientEdit}
 exact={true}
/>
	
		</Switch>
				
</div>
		
	</BrowserRouter>
	
	);
	
}
}


export default App;

