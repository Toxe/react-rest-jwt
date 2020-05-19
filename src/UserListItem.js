import React from "react";

export default function UserListItem({ user }) {
    return (
        <div className="User">
            #{user.id} Name: <strong>{user.name}</strong>
        </div>
    );
}
