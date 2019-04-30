import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

class ClientForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.client ? props.client.name : ""
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		const formData = {
			id: this.props.client ? this.props.client.id : uuid(),
			name: this.state.name
		};
		this.props.handleSubmit(formData);
	};

	handleNameChange = e => {
		const name = e.target.value;
		this.setState(() => ({ name }));
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
					<input type="submit" />
				</form>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		projects: state.projects
	};
};

export default connect(mapStateToProps)(ClientForm);
