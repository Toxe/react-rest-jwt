import React from "react";

export default function RequestError({ error, handleClose }) {
    return (
        <div className="RequestError">
            <div>
                Request error: {error.message}<br />
                {error.response && <span>Server response: {error.response.status} {error.response.data.error}</span>}
                {error.response && error.response.data.message && <pre>{JSON.stringify(error.response.data.message, null, "  ")}</pre>}
            </div>
            <div>
                <button onClick={handleClose}>close</button>
            </div>
        </div>
    );
}
