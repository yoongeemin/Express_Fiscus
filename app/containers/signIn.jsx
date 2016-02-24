import React from "react";
import {Link} from 'react-router';

export default class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = () => {
			var credentials = {
				email: this.refs.email.value,
				password: this.refs.password.value
			};
			this.props.onSignIn(credentials);
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
							<Link to="/signup" className="button right">Sign Up</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
