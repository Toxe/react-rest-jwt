import React from "react";
import DeleteListItemButton from "../DeleteListItemButton";
import EditUserForm from "./EditUserForm";

export default function UserListItem({ user, handleDeleteUser, handleEditUser }) {
    return (
        <tr>
            <td>#{user.id}</td>
            <td><strong>{user.name}</strong></td>
            <td>
                <DeleteListItemButton id={user.id} handleDelete={handleDeleteUser} />
                <EditUserForm oldUserValues={user} handleEditUser={handleEditUser} />
            </td>
        </tr>
    );
}
