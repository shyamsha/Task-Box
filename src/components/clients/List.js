import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ClientList = props => {
	return (
		<div>
			<h5>Listing Clients-{props.clients.length}</h5>
			<ul>
				{props.clients.map(client => {
					return (
						<li key={client.id}>
							<Link to={`/clients/${client.id}`}>{client.name}</Link>
						</li>
					);
				})}
			</ul>
			<Link to="/clients/new"> Add Project </Link>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		clients: state.clients
	};
};

export default connect(mapStateToProps)(ClientList);
