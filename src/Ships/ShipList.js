import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShipList.css";
import ShipListItem from "./ShipListItem";
import ShipDetails from "./ShipDetails";
import RequestError from "../RequestError";
import RefreshListButton from "../RefreshListButton";

export default function ShipList() {
    const [ships, setShips] = useState([]);
    const [shipDetailsID, setShipDetailsID] = useState("");
    const [requestError, setRequestError] = useState(null);

    const refreshShips = () => {
        axios
            .get("/api/ships")
            .then((res) => setShips(res.data))
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    useEffect(() => {
        refreshShips();
    }, []);

    return (
        <div>
            <div className="Container">
                <h1>Ships</h1>
                <table className="ShipTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Affiliation</th>
                            <th>Category</th>
                            <th>Ship Class</th>
                            <th>Model</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ships.map((ship) => (
                            <ShipListItem key={ship.id} ship={ship} changeShipDetailsID={() => setShipDetailsID(ship.id)} />
                        ))}
                    </tbody>
                </table>
                <RefreshListButton refresh={refreshShips}/>
                {requestError || <ShipDetails shipDetailsID={shipDetailsID} />}
            </div>
        </div>
    );
}
