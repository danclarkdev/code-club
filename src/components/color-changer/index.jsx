import React from 'react';

import { useColor } from '../../providers/color-provider';
import HeroBody from '../hero/hero-body';
import Tile from '../tile';

export default function ColorChanger() {

    const { color } = useColor();

    return <Tile level="child" style={{ backgroundColor: color }} className="hero color-change">
        <HeroBody>
            <p className="title has-text-light is-size-1 has-text-centered">Woah</p>
        </HeroBody>
    </Tile>
}