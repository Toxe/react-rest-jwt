import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import UserListItem from "./UserListItem";
import AddUserForm from "./AddUserForm";
import RequestError from "../RequestError";
import RefreshListButton from "../RefreshListButton";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [requestError, setRequestError] = useState(null);

    const refreshUsers = () => {
        axios
            .get("/api/users")
            .then((res) => setUsers(res.data))
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    const handleCreateUser = (user) => {
        axios
            .post("/api/users", user)
            .then((res) => {
                setUsers([...users, res.data]);
                setRequestError(null);
            })
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    const handleEditUser = (user) => {
        axios
            .put(`/api/users/${user.id}`, user)
            .then((res) => {
                setUsers(users.filter((u) => (u.id === user.id ? res.data : u)));
                setRequestError(null);
            })
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    const handleDeleteUser = (user_id) => {
        axios
            .delete(`/api/users/${user_id}`)
            .then((res) => {
                setUsers(users.filter((u) => u.id !== user_id));
                setRequestError(null);
            })
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    return (
        <div>
            <div className="Container">
                <h1>Users</h1>
                <table className="UserTable">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Username</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <UserListItem key={user.id} user={user} handleDeleteUser={handleDeleteUser} handleEditUser={handleEditUser} />
                        ))}
                    </tbody>
                </table>
                <RefreshListButton refresh={refreshUsers}/>
                <AddUserForm handleCreateUser={handleCreateUser} />
                {requestError}
            </div>
        </div>
    );
}
