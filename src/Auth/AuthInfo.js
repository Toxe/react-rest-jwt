import React from "react";

export default function AuthInfo({ auth }) {
    return (
        <div className="AuthInfo">
            <div><strong>access_token:</strong> {auth.access_token}</div>
            <div><strong>refresh_token:</strong> {auth.refresh_token}</div>
            <div><strong>identity:</strong> {auth.userId}</div>
        </div>
    );
}
