import React from "react";
import "./app.css";
import UserList from "./Users/UserList";
import ShipList from "./Ships/ShipList";

export default function App() {
    return (
        <div>
            <UserList />
            <ShipList />
        </div>
    );
}
