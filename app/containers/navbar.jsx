import React from "react";
import { connect } from "react-redux";
import { SignIn, Ticker } from "../components/signIn";
import { signIn } from "../actions/userActionCreator";

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSignIn = (credentials) => {
            this.props.dispatch(signIn(credentials));
        };
    }

    render() {
        const navbarComponents = this.props.authenticated
            ? <a onClick={this.props.onSignOut} href="javascript:void(0);">Sign Out</a>
            : <SignIn onSignIn={this.handleSignIn} />;

        const tickers = this.props.authenticated
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
}

NavBar.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    authenticated: React.PropTypes.bool.isRequired,
    onSignOut: React.PropTypes.func.isRequired,
    quotes: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        state,
        // quotes: state.quoteReducer.quotes,
        // profile: state.fiscusReducer.profile,
        // apps: state.fiscusReducer.apps,
        // activeApp: state.fiscusReducer.activeApp
    };
}

export default connect(mapStateToProps)(NavBar);
