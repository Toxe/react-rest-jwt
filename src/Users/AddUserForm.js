import React, { useState, useEffect } from "react";

export default function AddUserForm({ handleCreateUser }) {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ name: "", password: "" });

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const onUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateUser(user);
    };

    useEffect(() => {
        // reset user input values when the the input fields hide
        if (!visible)
            setUser({ name: "", password: "" });
    }, [visible]);

    return (
        <div className="AddUserForm">
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Add User"}</button>
            {visible && (
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            Name: <input type="text" size="20" name="name" value={user.name} onChange={onUserChange} />{" "}
                            Password: <input type="password" size="20" name="password" value={user.password} onChange={onUserChange} />
                        </div>
                        <div>
                            <button type="submit" disabled={Object.values(user).some((e) => e === "")}>Create new User</button>
                            <button type="button" onClick={toggleVisibility}>Cancel</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}
