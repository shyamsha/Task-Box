import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
store.subscribe(() => {
	store.getState();
});
const app = (
	<Provider store={store}>
		<App />
	</Provider>
);
ReactDOM.render(app, document.getElementById("root"));
