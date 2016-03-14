import React from "react";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = () => {
            const credentials = {
                signin: this.refs.signin.value,
                password: this.refs.password.value,
            };
            this.props.onSignIn(credentials);
        };
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group">
                    <label className="sr-only" htmlFor="signin">signin</label>
                    <input type="text" ref="signin" className="form-control" id="signin" placeholder="Email or phone" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="password">password</label>
                    <input type="text" ref="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Sign In</button>
            </form>
        );
    }
}

SignIn.propTypes = {
    onSignIn: React.PropTypes.func.isRequired,
};
