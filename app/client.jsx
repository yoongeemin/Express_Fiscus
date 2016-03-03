import { configureStore } from "./utils/utils";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserhistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { SignIn, Dashboard} from "./components/index";
import { App, Authentication, SignUp} from "./containers/index";

import * as containers from "./containers/index";
import reducers from "./reducers/index";

const store = configureStore(reducers, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const authentication = (nextState, replace) => {
	authenticated = false;
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

