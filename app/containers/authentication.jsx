import React from "react";
import {signUp} from '../actions/authenticationActionCreator';
import {Link} from 'react-router';

class Authentication extends React.Component {
	constructor(props) {
		super(props);

		this.handleSignUp = (credentials) => {
			this.props.dispatch(
				signUp(credentials)
			);
		};
	}

	render() {
		return (
			<div>
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
				<Link to="/signup">Sign up with email</Link>
			</div>
		);
	}
}

export default ReactRedux.connect()(Authentication);

