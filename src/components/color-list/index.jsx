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

/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
const brightnessByColor = (colorToCheck) => {
    let color = "" + colorToCheck;
    let isHEX = colorToCheck.indexOf("#") === 0;
    let isRGB = colorToCheck.indexOf("rgb") === 0;
    let m;
    let r;
    let g;
    let b;
    
    if (isHEX) {
        const hasFullSpec = color.length === 7;
        m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
        if (m) {
            r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16);
            g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16);
            b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
        };
    }
    if (isRGB) {
        m = color.match(/(\d+){3}/g);
        if (m) {
            r = m[0];
            g = m[1];
            b = m[2];
        }
    }
    if (typeof r != "undefined") return ((r * 299) + (g * 587) + (b * 114)) / 1000;
}

export default function ColorList() {

    const { registerCallback } = useColor();

    const [colors, dispatch] = useReducer(reducer, initialColors);

    useEffect(() => {
        registerCallback(color => dispatch(color));
    }, []);

    return <Tile level="child" className="content has-background-light">
        <ul>
            {
                colors.map((color, index) => <li key={index}>
                    {
                        color
                    }
                </li>)
            }
        </ul>
    </Tile>;
}