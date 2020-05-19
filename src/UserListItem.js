import React from "react";

export default function UserListItem({ user }) {
    return (
        <tr>
            <td>#{user.id}</td>
            <td>Name: <strong>{user.name}</strong></td>
        </tr>
    );
}
