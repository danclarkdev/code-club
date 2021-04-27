import React from 'react';

export default function Hero({
    children,
    className = '',
    ...props
}) {
    return <div {...props} className={`hero ${className}`}>
        {
            children
        }
    </div>
}