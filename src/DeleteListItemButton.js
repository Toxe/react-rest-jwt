import React from "react";

export default function DeleteListItemButton({ id, handleDelete }) {
    return <button type="button" onClick={() => handleDelete(id)}>delete</button>;
}
