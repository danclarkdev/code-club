import React, { useEffect, useState } from 'react';

import eventBus from '../../models/event-bus';

export default function Publisher({
    children,
    event,
    publishable,
}) {

    const [value, setValue] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {

            const generated = publishable.generate();

            setValue(generated);

            eventBus.dispatch(event(generated))
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return children({
        value
    });
}