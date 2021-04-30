import React, { useEffect, useState } from 'react';

import eventBus from '../../models/event-bus';

export default function Subscriber({
    children,
    event,
    onEvent,
}) {
    const [childProps, setChildProps] = useState({});

    useEffect(() => {
        eventBus.on(event, (e) => onEvent(e, childProps, setChildProps));

        return () => eventBus.remove(event, (e) => onEvent(e, childProps, setChildProps));
    }, []);

    return children(childProps);
}