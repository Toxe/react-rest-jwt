import React, { useContext } from "react";
import TokenInfo from "./TokenInfo";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function AuthInfo({ handleRefresh }) {
    const { currentUserId } = useContext(CurrentUserContext);

    if (currentUserId === 0)
        return null;

    return (
        <div className="AuthInfo">
            <div>
                <strong>identity:</strong> {currentUserId}
            </div>
            <TokenInfo tokenName="access_token" />
            <TokenInfo tokenName="refresh_token" />
            <div>
                <button type="button" onClick={handleRefresh}>Refresh token</button>
            </div>
        </div>
    );
}
