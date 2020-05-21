import React from "react";

export default function DeleteListItemButton({ id, handleDelete }) {
    return <button onClick={() => handleDelete(id)}>delete</button>;
}
