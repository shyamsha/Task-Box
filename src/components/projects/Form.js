import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

class ProjectForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.project ? props.project.name : "",
			client: props.project ? props.project.client : ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		const formData = {
			id: this.props.project ? this.props.project.id : uuid(),
			name: this.state.name,
			client: this.state.client
		};
		this.props.handleSubmit(formData);
	};

	handleNameChange = e => {
		const name = e.target.value;
		this.setState(() => ({ name }));
	};
	clientChange = e => {
		const client = e.target.value;
		this.setState(() => ({ client }));
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input
							type="text"
							value={this.state.name}
							onChange={this.handleNameChange}
						/>
					</label>{" "}
					<br />
					<label>
						<select onChange={this.clientChange} value={this.state.client}>
							<option value="select">Select Clients</option>
							{this.props.clients.map(client => {
								return (
									<option value={client.name} key={client.id}>
										{client.name}
									</option>
								);
							})}
						</select>
					</label>
					<input type="submit" />
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		clients: state.clients
	};
};
export default connect(mapStateToProps)(ProjectForm);
