import React from 'react';

export default function HeroBody({
    children,
    className = '',
    ...props
}) {
    return <div {...props} className={`hero-body ${className}`}>
        {
            children
        }
    </div>
}