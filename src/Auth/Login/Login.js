import React, { useContext } from "react";
import { CurrentUserContext } from "../../Context/CurrentUser";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";

export default function Login({ handleLogin, handleLogout }) {
    const { currentUserId } = useContext(CurrentUserContext);

    return (
        <>
            {currentUserId > 0 ? (
                <LogoutComponent userId={currentUserId} handleLogout={handleLogout} />
            ) : (
                <LoginComponent handleLogin={handleLogin} />
            )}
        </>
    );
}
