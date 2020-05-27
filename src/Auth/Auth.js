import React, { useState, useContext, useEffect } from "react";
import "./Auth.css";
import { login, logout, refresh, initAuth } from "./API";
import Login from "./Login/Login";
import AuthInfo from "./AuthInfo";
import RequestError from "../RequestError";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function Auth() {
    const [requestError, setRequestError] = useState(null);
    const { setCurrentUserId } = useContext(CurrentUserContext);

    useEffect(() => {
        // init auth from already existing tokens
        const access_token = localStorage.getItem("access_token");
        const refresh_token = localStorage.getItem("refresh_token");

        try {
            setCurrentUserId(initAuth(access_token, refresh_token));
        } catch (error) {}
    }, [setCurrentUserId]);

    const handleLogin = async (credentials) => {
        try {
            const userId = await login(credentials);
            setCurrentUserId(userId);
            setRequestError(null);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    const handleLogout = async () => {
        try {
            // no matter what happens, always "logout" locally first
            setCurrentUserId(0);
            setRequestError(null);
            await logout();
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    const handleRefresh = async () => {
        try {
            await refresh();
            setRequestError(null);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    return (
        <>
            <Login handleLogin={handleLogin} handleLogout={handleLogout} />
            <AuthInfo handleRefresh={handleRefresh} />
            {requestError}
        </>
    );
}
