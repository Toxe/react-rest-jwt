import React from "react";
import "./app.css";
import AuthHeader from "./Auth/AuthHeader";
import UserList from "./Users/UserList";
import ShipList from "./Ships/ShipList";

export default function App() {
    return (
        <div>
            <AuthHeader />
            <UserList />
            <ShipList />
        </div>
    );
}
