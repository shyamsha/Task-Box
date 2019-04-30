import uuid from "uuid";
const tasksIntialState = [
	{
		id: uuid(),
		task: "bootcamp",
		isComplete: false,
		dueDate: "12-12-2022",
		projectId: 1
	},
	{
		id: uuid(),
		task: "open facebook",
		isComplete: false,
		dueDate: "12-12-2022",
		projectId: 1
	}
];
const tasksReducer = (state = tasksIntialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...state, action.task];
		// case "EDIT_TASK":
		// 	return state.map(task => {
		// 		if (task.id === action.id) {
		// 			return Object.assign({}, task, action.task);
		// 		} else {
		// 			return task;
		// 		}
		// 	});
		case "REMOVE_TASK":
			return state.filter(task => task.id !== action.id);

		default:
			return [...state];
	}
};
export default tasksReducer;
