import React from "react";

export default function LogoutSection({ userId, handleLogout }) {
    return (
        <div>
            <div>Logged in as user #{userId}.</div>
            <div><button onClick={handleLogout}>Logout</button></div>
        </div>
    );
}
