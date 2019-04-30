export const addTask = task => {
	return {
		type: "ADD_TASK",
		task
	};
};
// export const editTask = (id, task) => {
// 	return {
// 		type: "EDIT_TASK",
// 		id,
// 		task
// 	};
// };
export const removeTask = id => {
	return {
		type: "REMOVE_TASK",
		id
	};
};
