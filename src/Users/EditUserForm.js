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

    useEffect(() => {
        // reset user input values when the the input fields hide
        if (!visible)
            setUser({ ...oldUserValues, password: "" });
    }, [visible, oldUserValues]);

    return (
        <>
            <button onClick={toggleVisibility}>{visible ? "Hide" : "Edit"}</button>
            {visible && (
                <div className="EditUserForm">
                    <div>
                        Name: <input type="text" size="20" name="name" value={user.name} onChange={onUserChange} />{" "}
                        Password: <input type="password" size="20" name="password" value={user.password} onChange={onUserChange} />
                    </div>
                    <div>
                        <button disabled={user.name === "" || user.password === ""} onClick={() => handleEditUser(user)}>Save Changes</button>
                        <button onClick={toggleVisibility}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}
