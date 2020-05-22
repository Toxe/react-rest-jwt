import React, { useState } from "react";

export default function LoginSection({ handleLogin }) {
    const [credentials, setCredentials] = useState({ username: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(credentials);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                Username: <input type="text" size="20" name="username" value={credentials.username} onChange={onChange} />{" "}
                Password: <input type="password" size="20" name="password" value={credentials.password} onChange={onChange} />{" "}
                <input type="submit" value="Login" disabled={credentials.username === "" || credentials.password === ""} />
            </form>
        </div>
    );
}