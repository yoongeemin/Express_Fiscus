import Redux from "redux";
import "./cookie";

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

export function createStoreWithMiddleware() {
	return Redux.applyMiddleware(...arguments)(Redux.createStore);
}