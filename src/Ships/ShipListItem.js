import React from "react";
import DeleteListItemButton from "../DeleteListItemButton";

export default function ShipListItem({ ship, changeShipDetailsID, handleDeleteShip }) {
    return (
        <tr>
            <td><button onClick={changeShipDetailsID}>#{ship.id}</button></td>
            <td>{ship.affiliation}</td>
            <td>{ship.category}</td>
            <td>{ship.ship_class}</td>
            <td><strong>{ship.model}</strong></td>
            <td>
                <DeleteListItemButton id={ship.id} handleDelete={handleDeleteShip} />
            </td>
        </tr>
    );
}
