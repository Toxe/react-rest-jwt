import React, { useState, useContext } from "react";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function Login({ handleLogin, handleLogout }) {
    const { currentUserId } = useContext(CurrentUserContext);
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(credentials);
    };

    // show user info and logout button if a user is logged in
    if (currentUserId > 0) {
        return (
            <div className="Auth-LoggedIn">
                <div>Logged in as user #{currentUserId}.</div>
                <div><button type="button" onClick={handleLogout}>Logout</button></div>
            </div>
        );
    }

    // no user logged in, show login form
    return (
        <div className="Auth-NotLoggedIn">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" size="20" name="username" value={credentials.username} onChange={onChange} />{" "}
                Password: <input type="password" size="20" name="password" value={credentials.password} onChange={onChange} />{" "}
                <button type="submit" disabled={Object.values(credentials).some((e) => e === "")}>Login</button>
            </form>
        </div>
    );
}
