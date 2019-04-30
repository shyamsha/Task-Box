import React from "react";
import { connect } from "react-redux";

import { addClient } from "../../actions/Clients";
import ClientForm from "./Form";

class ClientNew extends React.Component {
	handleSubmit = formData => {
		this.props.dispatch(addClient(formData));
		this.props.history.push("/clients");
	};

	render() {
		return (
			<div>
				<h2> Add Client </h2>
				<ClientForm handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default connect()(ClientNew);
