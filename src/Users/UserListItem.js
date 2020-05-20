import React from "react";
import DeleteUserButton from "./DeleteUserButton";
import EditUserForm from "./EditUserForm";

export default function UserListItem({ user, handleDeleteUser, handleEditUser }) {
    return (
        <tr>
            <td>#{user.id}</td>
            <td><strong>{user.name}</strong></td>
            <td>
                <DeleteUserButton user_id={user.id} handleDeleteUser={handleDeleteUser} />
                <EditUserForm oldUserValues={user} handleEditUser={handleEditUser} />
            </td>
        </tr>
    );
}
