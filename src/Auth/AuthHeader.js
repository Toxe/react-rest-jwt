import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import LoginSection from "./LoginSection";
import LogoutSection from "./LogoutSection";
import AuthInfo from "./AuthInfo";
import RequestError from "../RequestError";

export default function AuthHeader() {
    const [auth, setAuth] = useState(null);
    const [requestError, setRequestError] = useState(null);

    const handleLogin = (credentials) => {
        axios
            .post("/auth/login", credentials)
            .then((res) => {
                setAuth(res.data);
                setRequestError(null);
                axios.defaults.headers["Authorization"] = `Bearer ${res.data.access_token}`;
            })
            .catch((error) =>
                setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />)
            );
    };

    const handleLogout = () => {
        const logout1 = axios.delete("/auth/logout");
        const logout2 = axios.delete("/auth/logout2", { headers: { Authorization: `Bearer ${auth.refresh_token}` } });

        axios
            .all([logout1, logout2])
            .then((res) => {
                setRequestError(null);
            })
            .catch((error) => {
                setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
            })
            .finally(() => {
                // no matter what happens, always "logout" locally
                setAuth(null);
                delete axios.defaults.headers["Authorization"];
            });
    };

    return (
        <div className={auth ? "AuthHeader LoggedIn" : "AuthHeader NotLoggedIn"}>
            {auth ? <LogoutSection handleLogout={handleLogout} /> : <LoginSection handleLogin={handleLogin} />}
            {auth && <AuthInfo auth={auth} />}
            {requestError}
        </div>
    );
}
