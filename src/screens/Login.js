import React from "react";
import "./Login.css";

function Login() {
    return (
        <div>
            <label>Username:  </label>
            <input placeholder="username"></input>
            <label>Password:  </label>
            <input placeholder="password"></input>
        </div>
    );
}
export default Login;