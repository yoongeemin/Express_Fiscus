import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/navbar"

class App extends React.Component {
	render() {
		return (
			<div id="app">
				<NavBar authenticated={false} />

				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// quotes: state.quoteReducer.quotes,
		// profile: state.fiscusReducer.profile,
		// apps: state.fiscusReducer.apps,
		// activeApp: state.fiscusReducer.activeApp
	};
}

export default connect(mapStateToProps)(App);
