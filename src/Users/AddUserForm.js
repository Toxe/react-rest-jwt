import React, { useState, useEffect } from "react";
import axios from "axios";
import RequestError from "../RequestError";

export default function AddUserForm({ userCreatedCallback }) {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ name: "", password: "" });
    const [requestError, setRequestError] = useState(null);

    const toggleVisibility = () => {
        setVisible(!visible);
        setRequestError(null);
    };

    const onUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        // reset user input values when the the input fields hide
        if (!visible) setUser({ name: "", password: "" });
    }, [visible]);

    const handleCreateUser = (user) => {
        axios
            .post("/api/users", user)
            .then((res) => {
                setRequestError(null);
                userCreatedCallback(user);
            })
            .catch((error) => setRequestError(<RequestError error={error} handleClose={() => setRequestError(null)} />));
    };

    return (
        <div className="AddUserForm">
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Add User"}</button>
            {visible && (
                <div>
                    <div>
                        Name: <input type="text" size="20" name="name" value={user.name} onChange={onUserChange} />{" "}
                        Password: <input type="password" size="20" name="password" value={user.password} onChange={onUserChange} />
                    </div>
                    <div>
                        <button disabled={user.name === "" || user.password === ""} onClick={() => handleCreateUser(user)}>Create new User</button>
                        <button onClick={toggleVisibility}>Cancel</button>
                    </div>
                </div>
            )}
            {requestError}
        </div>
    );
}
