import { createStore, combineReducers } from "redux";
import projectsReducer from "../reducres/projects";
import clientsReducer from "../reducres/Clients";
import tasksReducer from "../reducres/tasks";

const configureStore = () => {
	const store = createStore(
		combineReducers({
			projects: projectsReducer,
			clients: clientsReducer,
			tasks: tasksReducer
		})
	);
	return store;
};
export default configureStore;
