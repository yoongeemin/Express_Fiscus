import Authentication from "./containers/authentication";
import { createStoreWithMiddleware } from "./utils/utils";
import authenticationReducer from "./reducers/authenticationReducer";
import { Provider } from "react-redux";

const authenticationStore = createStoreWithMiddleware(
	ThunkMiddleware,
	LoggerMiddleware()
)(authenticationReducer);

ReactDOM.render(
	(
		<Provider store={authenticationStore}>
			<Authentication />
		</Provider>
	),
	document.getElementById("authentication")
);