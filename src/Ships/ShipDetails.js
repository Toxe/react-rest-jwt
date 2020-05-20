import React, { useState, useEffect } from "react";
import axios from "axios";
import RequestError from "../RequestError";

export default function ShipDetails(props) {
    const [ship, setShip] = useState(null);
    const [shipDetailsID, setShipDetailsID] = useState(props.shipDetailsID);
    const [requestError, setRequestError] = useState(null);

    useEffect(() => {
        setShipDetailsID(props.shipDetailsID);
    }, [props.shipDetailsID]);

    useEffect(() => {
        setShip(null);
        setRequestError(null);

        if (shipDetailsID) {
            axios
                .get(`/api/ships/${shipDetailsID}`)
                .then((res) => setShip(res.data))
                .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
        }
    }, [shipDetailsID]);

    return (
        <div className="ShipDetails">
            <h2>Ship Details</h2>
            <div>
                Show details for id:
                <input
                    type="text"
                    size="3"
                    value={shipDetailsID}
                    onChange={(e) => setShipDetailsID(e.target.value.trim())}
                />
            </div>
            {ship && <pre>{JSON.stringify(ship, null, "  ")}</pre>}
            {requestError}
        </div>
    );
}
