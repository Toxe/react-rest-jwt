import React from "react";
import "./app.css";
import UserList from "./UserList";
import ShipList from "./ShipList";

export default function App() {
    return (
        <div>
            <UserList />
            <ShipList />
        </div>
    );
}
