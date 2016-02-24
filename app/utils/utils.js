import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import createLogger from "redux-logger";
import { syncHistory } from "react-router-redux";

export function dateToString(date) {
	var monthString  = date.month()+1<10 ? "0"+(date.month()+1).toString() : (date.month()+1).toString();
	var dayString 	 = date.date()<10 ? "0"+date.date().toString() : date.date().toString();
	var dateString 	 = date.year().toString()+"-"+monthString+"-"+dayString;
	
	var hourString 	 = date.hour()<10 ? "0"+date.hour().toString() : date.hour().toString();
	var minuteString = date.minutes()<10 ? "0"+date.minutes().toString() : date.minutes().toString();
	var timeString	 = hourString+":"+minuteString;
	
	var secondString = date.seconds()<10 ? "0"+date.seconds().toString() : date.seconds().toString();

	return [dateString, timeString, secondString];
}

// export function setUpCSRFToken() {
// 	var csrfToken = $.cookie('csrftoken');
// 	$.ajaxSetup({
// 		headers: { "X-CSRFToken": csrfToken }
// 	});
// }

export function configureStore(reducer, history) {
	var middlewares = [ thunk,  syncHistory(history) ];

	if (__ENV__ === "DEV") {
		middlewares.push(createLogger());
	}

	return applyMiddleware(...middlewares)(createStore)(reducer);
}
