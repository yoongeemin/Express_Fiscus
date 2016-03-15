import React from "react";
import {signUp} from '../actions/authenticationActionCreator';
import {Link} from 'react-router';

class Authentication extends React.Component {
	render() {
		return (
			<div>
				<Link to="/signup">Sign up with email</Link>
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
			</div>
		);
	}
}

export default ReactRedux.connect()(Authentication);
