import { combineReducers } from "redux";
import { routeReducer as routing } from "react-redux";
import userReducer from "./userReducer";

export default combineReducers({
	userReducer,
	routing
});
