import React from "react";

export default function LogoutComponent({ userId, handleLogout }) {
    return (
        <div className="Auth-LoggedIn">
            <div>Logged in as user #{userId}.</div>
            <div><button type="button" onClick={handleLogout}>Logout</button></div>
        </div>
    );
}
