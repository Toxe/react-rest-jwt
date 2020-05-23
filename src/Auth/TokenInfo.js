import React, { useState, useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import jwt from "jsonwebtoken";

export default function TokenInfo({ token }) {
    const [decoded, setDecoded] = useState(null);
    const [issued, setIssued] = useState("-");
    const [expires, setExpires] = useState("-");
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const decoded = jwt.decode(token);
        const iat = new Date(decoded.iat * 1000);
        const exp = new Date(decoded.exp * 1000);

        setDecoded(decoded);

        const interval = setInterval(() => {
            setIssued(formatDistanceToNowStrict(iat, { addSuffix: true }));
            setExpires(formatDistanceToNowStrict(exp, { addSuffix: true }));
            setIsExpired(Date.now() > exp);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [token]);

    if (decoded === null)
        return null;

    return (
        <div className="TokenInfo">
            <div>
                <strong>{decoded.type} token</strong>: {token}
            </div>
            <div>issued: {issued}</div>
            <div>expires: {expires}</div>
            {isExpired && <div className="expired">EXPIRED</div>}
        </div>
    );
}
