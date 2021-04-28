import React, { useState } from 'react';

import { useColor } from '../../providers/color-provider';
import HeroBody from '../hero/hero-body';
import SubscriptionButton from '../subscription-button';
import Tile from '../tile';

export default function ColorChanger() {

    const { color: init } = useColor();

    const [color, setColor] = useState(init);

    const handleColorChange = color => setColor(color)

    return <Tile level="child" style={{ backgroundColor: color }} className="hero color-change">
        <HeroBody>
            <p className="title has-text-light is-size-1 has-text-centered">Woah</p>
        </HeroBody>
        <SubscriptionButton name={ColorChanger.name} callback={handleColorChange} />
    </Tile>
}