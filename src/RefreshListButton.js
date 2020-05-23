import React, { useState } from "react";

export default function RefreshListButton({ refresh }) {
    const [successVisible, setSuccessVisible] = useState(false);

    const onClick = () => {
        refresh();
        setSuccessVisible(true);
        setTimeout(() => setSuccessVisible(false), 1000);
    };

    return (
        <div className="RefreshListButton">
            <button type="button" onClick={onClick}>Refresh</button> {successVisible && "Done!"}
        </div>
    );
}
