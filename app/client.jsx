import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./utils/utils";
import { Dashboard } from "./components/index";
import { App, Authentication, SignUp } from "./containers/index";
import reducers from "./reducers/index";

const store = configureStore(reducers, browserhistory);
const history = syncHistoryWithStore(browserhistory, store);

const authentication = (nextState, replace) => {
	let authenticated = false;
	if (!authenticated) {
		replace("/signin");
	}
	else {
		replace("/dashboard");
	}
};

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={App}>
					<IndexRoute onEnter={authentication} />
					<Route path="/signin" component={Authentication} />
					<Route path="/signup" component={SignUp} />
					<Route path="/dashboard" component={Dashboard} />
				</Route>
			</Router>
		</Provider>
	),
	document.body
);

