import React, { useContext } from "react";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function LogoutSection({ userId, handleLogout }) {
    const { currentUserId } = useContext(CurrentUserContext);

    return (
        <div>
            <div>Logged in as user #{currentUserId}.</div>
            <div><button type="button" onClick={handleLogout}>Logout</button></div>
        </div>
    );
}
