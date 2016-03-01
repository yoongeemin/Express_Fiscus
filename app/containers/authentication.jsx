import React from "react";
// import { SIGN_IN, SIGN_UP } from "../utils/constants";
import * as AuthenticationActions from '../actions/authenticationActionCreator';
import {Link} from 'react-router';

class Authentication extends React.Component {
	constructor(props) {
		super(props);

		this.handleSignUp = (credentials) => {
			this.props.dispatch(
				AuthenticationActions.signUp(credentials)
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

