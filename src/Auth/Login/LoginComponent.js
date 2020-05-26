import React, { useState } from "react";

export default function LoginComponent({ handleLogin }) {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(credentials);
    };

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
