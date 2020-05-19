import React from "react";

export default function ShipListItem({ ship, changeShipDetailsID }) {
    return (
        <div className="Ship">
            <button onClick={changeShipDetailsID}>#{ship.id}</button> ({ship.ship_class}) <strong>{ship.model}</strong>
        </div>
    );
}
