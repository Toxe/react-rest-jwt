import React, { useState, useContext } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import "./Auth.css";
import Login from "./Login/Login";
import AuthInfo from "./AuthInfo";
import RequestError from "../RequestError";
import { TokenDecodeError } from "../Errors";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function Auth() {
    const [requestError, setRequestError] = useState(null);
    const { setCurrentUserId } = useContext(CurrentUserContext);

    const handleLogin = (credentials) => {
        axios
            .post("/auth/login", credentials)
            .then((res) => {
                try {
                    const access_token_data = jwt.decode(res.data.access_token);
                    const refresh_token_data = jwt.decode(res.data.refresh_token);

                    if (access_token_data === null || refresh_token_data === null)
                        throw new TokenDecodeError("Unable to decode token");

                    setCurrentUserId(access_token_data.identity);
                    setRequestError(null);
                    localStorage.setItem("access_token", res.data.access_token);
                    localStorage.setItem("refresh_token", res.data.refresh_token);
                    axios.defaults.headers["Authorization"] = `Bearer ${res.data.access_token}`;
                } catch (err) {
                    throw new TokenDecodeError("Unable to decode token");
                }
            })
            .catch((error) =>
                setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />)
            );
    };

    const handleLogout = () => {
        const logout1 = axios.delete("/auth/logout");
        const logout2 = axios.delete("/auth/logout2", { headers: { Authorization: `Bearer ${localStorage.getItem("refresh_token")}` } });

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
                setCurrentUserId(0);
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                delete axios.defaults.headers["Authorization"];
            });
    };

    const handleRefresh = () => {
        axios
            .post("/auth/refresh", null, { headers: { Authorization: `Bearer ${localStorage.getItem("refresh_token")}` } })
            .then((res) => {
                setRequestError(null);
                localStorage.setItem("access_token", res.data.access_token);
                axios.defaults.headers["Authorization"] = `Bearer ${res.data.access_token}`;
            })
            .catch((error) =>
                setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />)
            );
    };

    return (
        <>
            <Login handleLogin={handleLogin} handleLogout={handleLogout} />
            <AuthInfo handleRefresh={handleRefresh} />
            {requestError}
        </>
    );
}
