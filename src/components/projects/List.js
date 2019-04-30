import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ProjectList = props => {
	return (
		<div>
			<h5>Listing Tasks-{props.projects.length}</h5>
			<ul>
				{props.projects.map(project => {
					return (
						<li key={project.id}>
							<Link to={`/projects/${project.id}`}>{project.name}</Link>
						</li>
					);
				})}
			</ul>
			<Link to="/projects/new"> Add Project </Link>
		</div>
	);
};
const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};

export default connect(mapStateToProps)(ProjectList);
