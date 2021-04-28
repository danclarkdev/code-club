import React, { useCallback, useEffect, useReducer } from 'react';

import { useColor } from '../../providers/color-provider';
import Tile from '../tile';

const MAX_LENGTH = 4;

const initialColors = [];

const reducer = (colors, color) => {
    return [
        color,
        ...(colors.slice(0, MAX_LENGTH - 1)),
    ];
}

export default function ColorList() {
    const { registerCallback } = useColor();

    const [colors, dispatch] = useReducer(reducer, initialColors);

    useEffect(() => {
        registerCallback(color => dispatch(color));
    }, []);

    return <Tile level="parent" className="is-marginless is-paddingless">
        <Tile level="child" className="is-parent is-marginless is-paddingless">
            <Tile style={{ backgroundColor: colors[0] ?? 'transparent', height: '50%', borderRadius: '10px 0 0 0' }} className="color-change" level="child"></Tile>
            <Tile style={{ backgroundColor: colors[1] ?? 'transparent', height: '50%', borderRadius: '0 0 0 10px' }} className="color-change" level="child"></Tile>
        </Tile>
        <Tile level="child" className="is-parent is-marginless is-paddingless">
            <Tile style={{ backgroundColor: colors[2] ?? 'transparent', height: '50%', borderRadius: '0 10px 0 0' }} className="color-change" level="child"></Tile>
            <Tile style={{ backgroundColor: colors[3] ?? 'transparent', height: '50%', borderRadius: '0 0 10px 0' }} className="color-change" level="child"></Tile>
        </Tile>
    </Tile>;
}