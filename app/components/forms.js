import React from "react";

export class SignInForm extends React.Component {
	static propTypes = { 
		onSwitchForm: React.PropTypes.func
	};

	constructor(props) {
		super(props);

		this.handleSubmit = () => {
			var credentials = {
				email: this.refs.email.value,
				password: this.refs.password.value
			};
			this.props.onSignIn(credentials);
		};

		this.handleSwitchForm = () => {
			this.props.onSwitchForm();
		};
	}

	render() {
		return (
			<div className="form-panel">
				<div className="content">
					<div className="logo">FISCUS</div>

					<form>
						<input className="form-element" ref="email" name="email" type="text" placeholder="Email" />
						<input className="form-element" ref="password" name="password" type="password" placeholder="Password" />

						<div className="button-group two-buttons">
							<a className="button left" href="#" onClick={this.handleSubmit}>Sign In</a>
							<a className="button right" href="#" onClick={this.handleSwitchForm}>Sign Up</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}



export class SignUpForm extends React.Component {
	static propTypes = { 
		onSwitchForm: React.PropTypes.func
	};

	constructor(props) {
		super(props)
	}

	handleSubmit = () => {
		var credentials = {
			first_name: this.refs.first_name.value,
			last_name:  this.refs.last_name.value,
			email: 		this.refs.email.value,
			password: 	this.refs.password2.value
		};
		this.props.onSignUp(credentials);
	};

	handleSwitchForm = () => {
		this.props.onSwitchForm();
	};

	render() {
		return (
			<div className="form-panel">
				<div className="content">
					<div className="logo">FISCUS</div>

					<form>
						<div className="form-element input-group two-inputs">
							<input className="left" ref="first_name" name="first_name" type="text" placeholder="First Name" />
							<input className="right" ref="last_name" name="last_name" type="text" placeholder="Last Name" />
						</div>

						<input className="form-element" ref="email" name="email" type="text" placeholder="Email" />
						<input className="form-element" ref="password1" name="password1" type="password" placeholder="Password" />
						<input className="form-element" ref="password2" name="password2" type="password" placeholder="Password (Again)" />

						<div className="button-group two-buttons">
							<a className="button left" href="#" onClick={this.handleSubmit}>Sign Up</a>
							<a className="button right" href="#" onClick={this.handleSwitchForm}>Cancel</a>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

