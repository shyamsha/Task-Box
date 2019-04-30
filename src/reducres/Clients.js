import uuid from "uuid";

const clientsIntialState = [
	{ id: uuid(), name: "sHyaM" },
	{ id: uuid(), name: "saMc" },
	{ id: uuid(), name: "dinesh" },
	{ id: uuid(), name: "lokesh" },
	{ id: uuid(), name: "prassana" }
];
const clientsReducer = (state = clientsIntialState, action) => {
	switch (action.type) {
		case "ADD_CLIENT":
			return [...state, action.client];
		case "EDIT_CLIENT":
			return state.map(client => {
				if (client.id === action.id) {
					return Object.assign({}, client, action.client);
				} else {
					return client;
				}
			});
		case "REMOVE_CLIENT":
			return state.filter(client => client.id !== action.id);

		default:
			return [...state];
	}
};

export default clientsReducer;
