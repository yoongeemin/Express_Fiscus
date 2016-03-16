import React from "react";
import { Link } from "react-router";

export default Authentication = () => {
	return (
		<div>
			<Link to="/signup">Sign up with email</Link>
			<div className="g-signin2" data-onsuccess="onSignIn"></div>
		</div>
	);
};
