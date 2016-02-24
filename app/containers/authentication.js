import React from "react";
import { SignInForm, SignUpForm } from "../components/forms";
import { SIGN_IN, SIGN_UP } from "../utils/constants";
import * as AuthenticationActions from '../actions/authenticationActionCreator';

class Authentication extends React.Component {
	state = { form: SIGN_IN };
		
	constructor(props) {
		super(props);

		this.handleSignIn = (credentials) => {
			this.props.dispatch(
				AuthenticationActions.signIn(credentials)
			);
		};

		this.handleSignUp = (credentials) => {
			this.props.dispatch(
				AuthenticationActions.signUp(credentials)
			);
		};
	}

	render() {
		var form = null;
		if (this.state.form === SIGN_IN)
			form = <SignInForm onSwitchForm={ () => this.setState({ form: SIGN_UP }) } onSignIn={this.handleSignIn} />;
		else if (this.state.form === SIGN_UP)
			form = <SignUpForm onSwitchForm={ () => this.setState({ form: SIGN_IN }) } onSignUp={this.handleSignUp} />;

		return (
			<div id="authentication-background" className="absolute-center">
				<div id="authentication-form" className="margin-auto bg-color-black box-shadow">{form}</div>
			</div>
		);
	}
}

export default ReactRedux.connect()(Authentication);





