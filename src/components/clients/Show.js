/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeClient } from "../../actions/Clients";

const ClientShow = props => {
	return (
		<div>
			<h4>Name Of The Client:{props.client.name} </h4>
			<h6>Name Of The Projects:</h6>

			<ul>
				{props.projects.map(project => {
					if (project.client === props.client.name) {
						return (
							<li key={project.id}>
								<Link to={`/projects/${project.id}`}>{project.name}</Link>
							</li>
						);
					}
				})}
			</ul>

			{props.isAdmin && (
				<Link to={`/clients/edit/${props.client.id}`}> edit </Link>
			)}
			{props.isAdmin && (
				<button
					onClick={() => {
						const confirmDelete = window.confirm("Are you sure?");
						if (confirmDelete) {
							props.dispatch(removeClient(props.client.id));
							props.history.push("/clients");
						}
					}}
				>
					{" "}
					delete{" "}
				</button>
			)}

			<Link to="/clients"> back </Link>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		projects: state.projects,
		client: state.clients.find(client => client.id === props.match.params.id),
		isAdmin: true
	};
};

export default connect(mapStateToProps)(ClientShow);
