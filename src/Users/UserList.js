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

    const refreshUsers = async () => {
        try {
            const res = await axios.get("/api/users");
            setUsers(res.data);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    useEffect(() => {
        refreshUsers();
    }, []);

    const handleCreateUser = async (user) => {
        try {
            const res = await axios.post("/api/users", user);
            setUsers([...users, res.data]);
            setRequestError(null);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    const handleEditUser = async (user) => {
        try {
            const res = await axios.put(`/api/users/${user.id}`, user);
            setUsers(users.filter((u) => (u.id === user.id ? res.data : u)));
            setRequestError(null);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
    };

    const handleDeleteUser = async (user_id) => {
        try {
            await axios.delete(`/api/users/${user_id}`);
            setUsers(users.filter((u) => u.id !== user_id));
            setRequestError(null);
        } catch (error) {
            setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />);
        }
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
