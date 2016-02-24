import { configureStore } from "./utils/utils";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserhistory } from "react-router";

import * as containers from "./containers/index";
import reducers from "./reducers/index";
import { SignIn, SignUp } from "./components/index";

const store = configureStore(reducers, browserHistory);

const authentication = (nextState, replace, callback) => {
	if (!authenticated) {
		replace("/signin");
	}
	callback();
};

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={DashBoard} onEnter={authentication} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById("app")
);
