import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react';

import { ColorMaker } from '../../ColorMaker';
import Section from '../../components/section';

const ColorContext = React.createContext('color');

export const useColor = () => useContext(ColorContext);

const initialCallbacks = [];

const reducer = (callbacks, { callback, hash }) => {
    return {
        ...callbacks,
        [hash]: callback
    };
}

const hashFromFunction = (func, name) => {
    const string = JSON.stringify(func.toString())

    var hash = 0, i, chr;
    if (string.length === 0) return hash;
    for (i = 0; i < string.length; i++) {
        chr = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash.toString() + name;
};

export default function ColorProvider({
    children,
}) {
    const [color, setColor] = useState(() => ColorMaker.makeRandomHexColour());

    const [callbacks, dispatch] = useReducer(reducer, initialCallbacks);

    const [active, setActive] = useState(false);

    const registerCallback = useCallback((callback, name='') => {
        const hash = hashFromFunction(callback, name);

        dispatch({
            callback,
            hash
        })

        return hash
    }, []);

    const unregisterCallback = useCallback(hash => {
        dispatch({
            callback: null,
            hash
        });

        return hash
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if(active){
                setColor(
                    ColorMaker.makeRandomHexColour()
                );
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [active]);

    useEffect(() => {
        Object.entries(callbacks).filter(([, callback]) => !!callback).forEach(([, callback]) => callback(color));
    }, [color]);

    return <ColorContext.Provider
        value={{
            color,
            registerCallback,
            unregisterCallback,
            callbacks,
        }}>
        {
            children
        }
        <Section>
            <button onClick={() => setActive(!active)} className={`button is-small is-${active ? 'warning' : 'success'} is-fullwidth`}>
                {
                    active ? 'Stop' : 'Go'
                }
            </button>
        </Section>
    </ColorContext.Provider>
}