import React from "react";
import "./app.css";
import Auth from "./Auth/Auth";
import UserList from "./Users/UserList";
import ShipList from "./Ships/ShipList";
import CurrentUserContextProvider from "./Context/CurrentUser";

export default function App() {
    return (
        <CurrentUserContextProvider>
            <Auth />
            <UserList />
            <ShipList />
        </CurrentUserContextProvider>
    );
}
