import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const Dsshboard = props => {
	return (
		<div>
			<h4>clients information</h4>
			<h5>Total Projects- {props.projects.length}</h5>
			<h5>Total Clients- {props.clients.length}</h5>
			<h5>Total Tasks- {props.tasks.length}</h5>
			<h6>Recent Project</h6>
			<ul>
				<li>
					<Link
						to={`/projects/${props.projects[props.projects.length - 1].id}`}
					>
						{props.projects[props.projects.length - 1].name}
					</Link>
				</li>
				<li>
					<Link
						to={`/projects/${props.projects[props.projects.length - 1].id}`}
					>
						{props.projects[props.projects.length - 2].name}
					</Link>
				</li>
			</ul>
			<h6>Recent Task</h6>
			<ul>
				{props.tasks.map(task => {
					return <li key={task.id}>{task.task}</li>;
				})}
			</ul>
		</div>
	);
};
const mapStateToProps = (state, props) => {
	return {
		projects: state.projects,
		clients: state.clients,
		tasks: state.tasks
	};
};
export default connect(mapStateToProps)(Dsshboard);
