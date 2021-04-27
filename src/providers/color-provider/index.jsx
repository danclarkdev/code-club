import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';

import { ColorMaker } from '../../ColorMaker';

const ColorContext = React.createContext('color');

export const useColor = () => useContext(ColorContext);

const initialCallbacks = [];

const reducer = (callbacks, callback) => {
    return [
        ...callbacks,
        callback
    ];
}

export default function ColorProvider({
    children,
}) {
    const [color, setColor] = useState(() => ColorMaker.makeRandomHexColour());

    const [callbacks, dispatch] = useReducer(reducer, initialCallbacks);

    const registerCallback = useCallback(callback => dispatch(callback) , []);

    useEffect(() => {

        const interval = setInterval(() => {
            setColor(
                ColorMaker.makeRandomHexColour()
            );
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        callbacks.forEach(callback => callback(color));
    }, [color]);

    return <ColorContext.Provider
        value={{
            color,
            registerCallback,
            callbacks,
        }}>
        {
            children
        }
    </ColorContext.Provider>
}