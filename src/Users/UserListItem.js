import React, { useContext } from "react";
import DeleteListItemButton from "../DeleteListItemButton";
import EditUserForm from "./EditUserForm";
import { CurrentUserContext } from "../Context/CurrentUser";

export default function UserListItem({ user, handleDeleteUser, handleEditUser }) {
    const { currentUserId } = useContext(CurrentUserContext);

    return (
        <tr className={user.id === currentUserId ? "currentUser" : null}>
            <td>#{user.id}</td>
            <td><strong>{user.name}</strong></td>
            <td>
                <DeleteListItemButton id={user.id} handleDelete={handleDeleteUser} />
                <EditUserForm oldUserValues={user} handleEditUser={handleEditUser} />
            </td>
        </tr>
    );
}
