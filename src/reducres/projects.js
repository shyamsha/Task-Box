import uuid from "uuid";
const projectsIntialState = [
	{ id: uuid(), name: "Do read react", client: "sHyaM" },
	{ id: uuid(), name: "Do read redux", client: "saMc" }
];
const projectsReducer = (state = projectsIntialState, action) => {
	switch (action.type) {
		case "ADD_PROJECT":
			return [...state, action.project];
		case "EDIT_PROJECT":
			return state.map(project => {
				if (project.id === action.id) {
					return Object.assign({}, project, action.project);
				} else {
					return project;
				}
			});
		case "REMOVE_PROJECT":
			return state.filter(project => project.id !== action.id);

		default:
			return [...state];
	}
};
export default projectsReducer;
