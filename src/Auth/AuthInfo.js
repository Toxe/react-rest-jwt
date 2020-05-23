import React from "react";
import TokenInfo from "./TokenInfo";

export default function AuthInfo({ auth }) {
    return (
        <div className="AuthInfo">
            <div>
                <strong>identity:</strong> {auth.userId}
            </div>
            <TokenInfo token={auth.access_token} />
            <TokenInfo token={auth.refresh_token} />
        </div>
    );
}
