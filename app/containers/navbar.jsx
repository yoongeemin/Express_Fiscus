import React from "react";
import { connect } from "react-redux";
import { SignIn, Ticker } from "../components/index";
import { signOut } from "../actions/index";

const NavBar = () => {
    const navbarComponents = this.props.profile.isEmpty()
        ? <a onClick={this.props.dispatch(signOut())} href="javascript:void(0);">Sign Out</a>
        : <SignIn />;

    const tickers = this.props.profile.isEmpty()
        ? null
        : <Ticker quotes={this.props.quotes} />;

    return (
        <nav id="navbar" className="fill-width fixed-top box-shadow on-top">
            <div id="navbar-main" className="text-color-white">
                <a href="javascript:void(0);">FISCUS</a>
                {navbarComponents}
            </div>
            {tickers}
        </nav>
    );
};

NavBar.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    profile: React.PropTypes.object.isRequired,
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
