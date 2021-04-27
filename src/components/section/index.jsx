import React from 'react';

export default function Section({
    children,
    className = '',
    ...props
}) {
    return <div {...props} className={`section ${className}`}>
        {
            children
        }
    </div>
}