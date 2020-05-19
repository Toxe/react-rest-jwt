import React from "react";

export default function RequestError({ error }) {
    return (
        <div className="RequestError">
            Request error: {error.message}<br />
            Server response: {error.response.status} {error.response.data.error}
            {error.response.data.message && (<pre>{JSON.stringify(error.response.data.message, null, "  ")}</pre>)}
        </div>
    );
}
