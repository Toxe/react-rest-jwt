import React, { useState, useEffect } from "react";

export default function EditUserForm({ oldUserValues, handleEditUser }) {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ ...oldUserValues, password: "" });

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const onUserChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditUser(user);
    };

    useEffect(() => {
        // reset user input values when the the input fields hide
        if (!visible)
            setUser({ ...oldUserValues, password: "" });
    }, [visible, oldUserValues]);

    return (
        <>
            <button type="button" onClick={toggleVisibility}>{visible ? "Hide" : "Edit"}</button>
            {visible && (
                <form onSubmit={handleSubmit}>
                    <div className="EditUserForm">
                        <div>
                            Name: <input type="text" size="20" name="name" value={user.name} onChange={onUserChange} />{" "}
                            Password: <input type="password" size="20" name="password" value={user.password} onChange={onUserChange} />
                        </div>
                        <div>
                            <button type="submit" disabled={Object.values(user).some((e) => e === "")}>Save Changes</button>
                            <button type="button" onClick={toggleVisibility}>Cancel</button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}
