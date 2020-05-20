import React, { useState, useEffect } from "react";
import axios from "axios";
import ShipListItem from "./ShipListItem";
import ShipDetails from "./ShipDetails";
import RequestError from "../RequestError";

export default function ShipList() {
    const [ships, setShips] = useState([]);
    const [shipDetailsID, setShipDetailsID] = useState("");
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        axios
            .get("/api/ships")
            .then((res) => setShips(res.data))
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    }, []);

    return (
        <div>
            <div className="Container">
                <h1>Ships</h1>
                {ships.map((ship) => (
                    <ShipListItem key={ship.id} ship={ship} changeShipDetailsID={() => setShipDetailsID(ship.id)} />
                ))}
                {requestError || <ShipDetails shipDetailsID={shipDetailsID} />}
            </div>
        </div>
    );
}
