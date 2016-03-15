import { combineReducers } from "redux";
import { routeReducer as routing } from "react-redux";
import userReducer from "./userReducer";
import quoteReducer from "./quoteReducer";

export default combineReducers({
	userReducer,
	quoteReducer,
	routing,
});
