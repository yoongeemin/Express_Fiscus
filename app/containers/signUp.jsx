import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router';
import { signUp } from '../actions/index';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = () => {
			var credentials = {
				first_name: this.refs.first_name.value,
				last_name:  this.refs.last_name.value,
				email: 		this.refs.email.value,
				mobile: 	this.refs.mobile.value,
				password: 	this.refs.password2.value
			};
			
			this.props.dispatch( signUp(credentials) );
		};		
	}

	render() {
		return (
			<form>
				<div className="form-element input-group two-inputs">
					<input className="left" ref="first_name" name="first_name" type="text" placeholder="First Name" />
					<input className="right" ref="last_name" name="last_name" type="text" placeholder="Last Name" />
				</div>

				<input className="form-element" ref="email" name="email" type="text" placeholder="Email" />
				<input className="form-element" ref="mobile" name="mobile" type="text" placeholder="Phone" />
				<input className="form-element" ref="password1" name="password1" type="password" placeholder="Password" />
				<input className="form-element" ref="password2" name="password2" type="password" placeholder="Password (Again)" />

				<div className="button-group two-buttons">
					<a className="button left" href="#" onClick={this.handleSubmit}>Sign Up</a>
					<Link to="/signin" className="button right">Cancel</Link>
				</div>
			</form>
		);
	}

	// render() {
	// 	return (
	// 		<div className="form-panel">
	// 			<div className="content">
	// 				<div className="logo">FISCUS</div>

	// 				<form>
	// 					<div className="form-element input-group two-inputs">
	// 						<input className="left" ref="first_name" name="first_name" type="text" placeholder="First Name" />
	// 						<input className="right" ref="last_name" name="last_name" type="text" placeholder="Last Name" />
	// 					</div>

	// 					<input className="form-element" ref="email" name="email" type="text" placeholder="Email" />
	// 					<input className="form-element" ref="password1" name="password1" type="password" placeholder="Password" />
	// 					<input className="form-element" ref="password2" name="password2" type="password" placeholder="Password (Again)" />

	// 					<div className="button-group two-buttons">
	// 						<a className="button left" href="#" onClick={this.handleSubmit}>Sign Up</a>
	// 						<Link to="/signin" className="button right">Cancel</Link>
	// 					</div>
	// 				</form>
	// 			</div>
	// 		</div>
	// 	);
	// }	
}

function mapStateToProps(state) {
	return { };
}

export default connect(mapStateToProps)(SignUp);

