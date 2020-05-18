import React from "react";

export default function RequestError({ error }) {
    return <div className="RequestError">Request Error: {error.message}</div>;
}
