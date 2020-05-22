import React from "react";

export default function LogoutSection({ handleLogout }) {
    return (
        <div>
            <div>Logged in.</div>
            <div><button onClick={handleLogout}>Logout</button></div>
        </div>
    );
}
