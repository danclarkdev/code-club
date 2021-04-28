import React, { useEffect, useState } from 'react';

import { useColor } from '../../providers/color-provider';
import HeroBody from '../hero/hero-body';
import SubscriptionButton from '../subscription-button';
import Tile from '../tile';

export default function RandomWordFetcher() {
    const [word, setWord] = useState('loading');

    const getWord = () => {
        fetch('http://random-word-api.herokuapp.com/word')
            .then(response => response.json())
            .then(([ word ]) => setWord(word))
    }

    return <Tile level="child" className="hero has-background-black">
        <HeroBody>
            <p className={`title has-text-light is-size-3 has-text-centered`}>
                {
                    word
                }
            </p>
        </HeroBody>
        <SubscriptionButton callback={getWord} />
    </Tile>;
}