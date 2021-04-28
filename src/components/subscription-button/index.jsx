import React, { useEffect, useState } from 'react';

import { useColor } from '../../providers/color-provider';

export default function SubscriptionButton({
    callback
}) {
    const { registerCallback, unregisterCallback } = useColor();

    const [active, setActive] = useState(true);

    const [callbackHash, setCallbackHash] = useState(null);

    useEffect(() => {
        setCallbackHash(
            registerCallback(callback)
        );
    }, []);

    const handleActivateClick = () => {
        if(active){
            unregisterCallback(callbackHash);
            setActive(false);
        } else {
            registerCallback(callback);
            setActive(true);
        }
    }

    return <button className={`button is-small is-${active ? 'warning' : 'success'}`} onClick={handleActivateClick}>
        {
            active ? 'Unsubscribe' : 'Subscribe'
        }
    </button>
}