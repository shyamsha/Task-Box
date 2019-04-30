import React, { Component } from "react";
// import { connect } from "react-redux";
import uuid from "uuid";

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: "",
			isComplete: "",
			dueDate: ""
		};
	}
	taskHandle = e => {
		e.persist();
		this.setState(() => ({ task: e.target.value }));
	};
	checkboxHandle = e => {
		e.persist();

		this.setState(() => ({ isComplete: e.target.checked }));
	};
	dateHandle = e => {
		e.persist();
		this.setState(() => ({ dueDate: e.target.value }));
	};
	handleSubmit = e => {
		e.preventDefault();
		const formData = {
			id: uuid(),
			task: this.state.task,
			isComplete: this.state.isComplete,
			dueDate: this.state.dueDate
		};
		this.props.handleSubmit(formData);
	};

	render() {
		return (
			<div>
				<h5>Adding New Task</h5>
				<form onSubmit={this.handleSubmit}>
					Task:
					<input
						type="text"
						name="task"
						value={this.state.task}
						onChange={this.taskHandle}
					/>{" "}
					<br />
					DueDate{" "}
					<input
						type="date"
						name="date"
						value={this.state.dueDate}
						onChange={this.dateHandle}
					/>
					<br />
					{/* Status:{" "} */}
					<input
						type="checkbox"
						name="isComplete"
						unchecked="true"
						hidden="true"
						value={this.state.isComplete}
						onChange={this.checkboxHandle}
					/>{" "}
					<br />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default AddTask;
