import React from "react";
import DeleteUserButton from "./DeleteUserButton";

export default function UserListItem({ user, handleDeleteUser }) {
    return (
        <tr>
            <td>#{user.id}</td>
            <td>Name: <strong>{user.name}</strong></td>
            <td><DeleteUserButton user_id={user.id} handleDeleteUser={handleDeleteUser} /></td>
        </tr>
    );
}
