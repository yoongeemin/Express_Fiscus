import { configureStore } from "./utils/utils";
import { Provider } from "react-redux";
import { Router, Route, IndexRoute, browserhistory } from "react-router";

import * as containers from "./containers/index";
import reducers from "./reducers/index";


const store = configureStore(reducers, browserHistory);

const authentication = (nextState, replace) => {
	authenticated = false;
	if (!authenticated) {
		replace({
			pathname: '/auth',
			state: { nextPathname: nextState.location.pathname }
		});
	}
};

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={DashBoard} onEnter={authentication} />
					<Route path="/auth" component={Authentication} />
					<Route path="/signup" component={SignUp} />
				</Route>
			</Router>
		</Provider>
	),
	document.body
);
