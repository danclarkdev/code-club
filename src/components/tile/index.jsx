import React from 'react';

export default function Tile({
    children,
    className = '',
    level = null,
    ...props
}) {
    return <div {...props} className={`tile ${level ? `is-${level}` : ''} ${className}`}>
        {
            children
        }
    </div>
}