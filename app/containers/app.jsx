import { connect } from "react-redux";

class App extends React.Component {
	render() {
		return {this.props.children};
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
