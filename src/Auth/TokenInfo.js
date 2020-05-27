import React, { useState, useEffect } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import jwt from "jsonwebtoken";

export default function TokenInfo({ tokenName }) {
    const [token, setToken] = useState(null);
    const [issued, setIssued] = useState("-");
    const [expires, setExpires] = useState("-");
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const token = localStorage.getItem(tokenName);
            setToken(token);

            if (token) {
                const decoded = jwt.decode(token);
                const iat = new Date(decoded.iat * 1000);
                const exp = new Date(decoded.exp * 1000);

                setToken(token);
                setIssued(formatDistanceToNowStrict(iat, { addSuffix: true }));
                setExpires(formatDistanceToNowStrict(exp, { addSuffix: true }));
                setIsExpired(Date.now() > exp);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [tokenName]);

    if (token === null)
        return null;

    return (
        <div className="TokenInfo">
            <div>
                <strong>{tokenName}</strong>: {token}
            </div>
            <div>issued: {issued}</div>
            <div className={isExpired ? "expired" : null}>
                {isExpired ? "expired" : "expires"}: {expires}
            </div>
        </div>
    );
}
