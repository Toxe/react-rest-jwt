import React from "react";

export default function ShipListItem({ ship, changeShipDetailsID }) {
    return (
        <tr>
            <td><button onClick={changeShipDetailsID}>#{ship.id}</button></td>
            <td>{ship.affiliation}</td>
            <td>{ship.category}</td>
            <td>{ship.ship_class}</td>
            <td><strong>{ship.model}</strong></td>
        </tr>
    );
}
