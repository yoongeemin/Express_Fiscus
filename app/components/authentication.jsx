import React from "react";
import { Link } from "react-router";

const Authentication = () => {
    return (
        <div id="authentication">
            <Link to="/signup">Sign up with email</Link>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
    );
};

export default Authentication;
