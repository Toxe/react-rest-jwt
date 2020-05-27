import React, { useState, useEffect } from "react";

export default function EditShipForm({ oldShipValues, handleEditShip }) {
    const [visible, setVisible] = useState(false);
    const [ship, setShip] = useState(oldShipValues);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const onShipChange = (e) => {
        const value = e.target.name === "roles" ? e.target.value.split(",") : e.target.value;
        setShip({ ...ship, [e.target.name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditShip(ship);
    };

    useEffect(() => {
        // reset ship input values when the the input fields hide
        if (!visible)
            setShip(oldShipValues);
    }, [visible, oldShipValues]);

    return (
        <>
            <button type="button" onClick={toggleVisibility}>{visible ? "Hide" : "Edit"}</button>
            {visible && (
                <form onSubmit={handleSubmit}>
                    <div className="EditShipForm">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Affiliation:</td>
                                    <td><input type="text" size="30" name="affiliation" value={ship.affiliation} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Category:</td>
                                    <td><input type="text" size="30" name="category" value={ship.category} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Crew:</td>
                                    <td><input type="text" size="30" name="crew" value={ship.crew} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Length:</td>
                                    <td><input type="text" size="30" name="length" value={ship.length} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Manufacturer:</td>
                                    <td><input type="text" size="30" name="manufacturer" value={ship.manufacturer} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Model:</td>
                                    <td><input type="text" size="30" name="model" value={ship.model} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Ship Class:</td>
                                    <td><input type="text" size="30" name="ship_class" value={ship.ship_class} onChange={onShipChange} /></td>
                                </tr>
                                <tr>
                                    <td>Roles:</td>
                                    <td>
                                        <input type="text" size="30" name="roles" value={ship.roles} onChange={onShipChange} /><br />
                                        Separate values by comma. Example: <em>"Transport,Freighter,Smuggling Vessel"</em>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button type="submit" disabled={Object.values(ship).some((e) => e === "")}>Save Changes</button>
                            <button type="button" onClick={toggleVisibility}>Cancel</button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}
