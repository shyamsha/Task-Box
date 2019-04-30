import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeProject } from "../../actions/projects";
import { removeTask } from "../../actions/tasks";
import AddTask from "./AddTask";
import { addTask } from "../../actions/tasks";

const ProjectShow = props => {
	const handleSubmit = formData => {
		formData.projectId = props.project.id;
		props.dispatch(addTask(formData));
	};
	return (
		<div>
			<h4> Name of Project: {props.project.name} </h4>
			<h5> Name of Client Holds The Project: {props.project.client} </h5>
			<h6>Tasks Under The Presenting This Project</h6>
			<ul>
				{props.tasks.map(task => {
					if (task.projectId === props.project.id) {
						return (
							<li
								key={task.id}
								style={{
									textDecoration: "line-through",
									textDecorationColor: "red"
								}}
							>
								{task.task}
								<button
									onClick={() => {
										props.dispatch(removeTask(task.id));
									}}
								>
									Delete
								</button>
							</li>
						);
					} else {
						return "";
					}
				})}
			</ul>
			<AddTask handleSubmit={handleSubmit} />
			<br />
			{props.isAdmin && (
				<Link to={`/projects/edit/${props.project.id}`}> edit </Link>
			)}
			{props.isAdmin && (
				<button
					onClick={() => {
						const confirmDelete = window.confirm("Are you sure?");
						if (confirmDelete) {
							props.dispatch(removeProject(props.project.id));
							props.history.push("/projects");
						}
					}}
				>
					{" "}
					delete{" "}
				</button>
			)}
			<Link to="/projects"> back </Link>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	return {
		project: state.projects.find(
			project => project.id === props.match.params.id
		),
		isAdmin: true,
		tasks: state.tasks
	};
};

export default connect(mapStateToProps)(ProjectShow);
