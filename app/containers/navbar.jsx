import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { signIn } from '../actions/authenticationActionCreator';

class NavBar extends React.Component {
	static propTypes = {
		authenticated: React.PropTypes.bool.isRequired
	};

	constructor(props) {
		super(props);

		this.handleSignIn = (credentials) => {
			this.props.dispatch( signIn(credentials) );
		};
	}

	render() {
		var navbarComponents = this.props.authenticated
			? <a onClick={this.props.onSignOut} href="javascript:void(0);">Sign Out</a> 
			: <SignIn onSignIn={this.handleSignIn} />;
		
		var tickers = this.props.authenticated
			? <Ticker quotes={this.props.quotes} />
			: null;

		return (
			<nav id="navbar" className="fill-width fixed-top box-shadow on-top">
				<div id="navbar-main" className="text-color-white">
					<a href="javascript:void(0);">FISCUS</a>
					{navbarComponents}
				</div>

				{tickers}
			</nav>
		);
	}
};

function mapStateToProps(state) {
	return {
		// quotes: state.quoteReducer.quotes,
		// profile: state.fiscusReducer.profile,
		// apps: state.fiscusReducer.apps,
		// activeApp: state.fiscusReducer.activeApp
	};
}

export default connect(mapStateToProps)(NavBar);





