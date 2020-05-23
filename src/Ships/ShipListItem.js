import React from "react";
import DeleteListItemButton from "../DeleteListItemButton";
import EditShipForm from "./EditShipForm";

export default function ShipListItem({ ship, changeShipDetailsID, handleDeleteShip, handleEditShip }) {
    return (
        <tr>
            <td><button type="button" onClick={changeShipDetailsID}>#{ship.id}</button></td>
            <td>{ship.affiliation}</td>
            <td>{ship.category}</td>
            <td>{ship.ship_class}</td>
            <td><strong>{ship.model}</strong></td>
            <td>
                <DeleteListItemButton id={ship.id} handleDelete={handleDeleteShip} />
                <EditShipForm oldShipValues={ship} handleEditShip={handleEditShip} />
            </td>
        </tr>
    );
}
