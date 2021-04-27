import React from 'react';

export default function Container({
    children,
    className = '',
    ...props
}) {
    return <div {...props} className={`container ${className}`}>
        {
            children
        }
    </div>
}