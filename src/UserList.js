import React, { useState, useEffect } from "react";
import axios from "axios";
import UserListItem from "./UserListItem";
import AddUserForm from "./AddUserForm";
import RequestError from "./RequestError";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [requestError, setRequestError] = useState(null);

    const refreshUsers = () => {
        axios
            .get("/api/users")
            .then((res) => setUsers(res.data))
            .catch((error) => setRequestError(<RequestError error={error} />));
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    const userCreatedCallback = (user) => {
        refreshUsers();
    };

    return (
        <div>
            <div className="Container">
                <h1>Users</h1>
                {users.map((user) => (
                    <UserListItem key={user.id} user={user} />
                ))}
                <AddUserForm userCreatedCallback={userCreatedCallback} />
                {requestError}
            </div>
        </div>
    );
}
