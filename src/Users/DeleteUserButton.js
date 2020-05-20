import React from "react";

export default function DeleteUserButton({ user_id, handleDeleteUser }) {
    return <button onClick={() => handleDeleteUser(user_id)}>delete</button>;
}
