import React from "react";
import "./app.css";
import AuthHeader from "./Auth/AuthHeader";
import UserList from "./Users/UserList";
import ShipList from "./Ships/ShipList";
import CurrentUserContextProvider from "./Context/CurrentUser";

export default function App() {
    return (
        <CurrentUserContextProvider>
            <AuthHeader />
            <UserList />
            <ShipList />
        </CurrentUserContextProvider>
    );
}
