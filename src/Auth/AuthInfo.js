import React, { useContext } from "react";
import TokenInfo from "./TokenInfo";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function AuthInfo({ auth, handleRefresh }) {
    const { currentUserId } = useContext(CurrentUserContext);

    return (
        <div className="AuthInfo">
            <div>
                <strong>identity:</strong> {currentUserId}
            </div>
            <TokenInfo token={auth.access_token} />
            <TokenInfo token={auth.refresh_token} />
            <div>
                <button type="button" onClick={handleRefresh}>Refresh token</button>
            </div>
        </div>
    );
}
