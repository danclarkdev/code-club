import React, { useEffect, useState } from 'react';

import { useColor } from '../../providers/color-provider';
import HeroBody from '../hero/hero-body';
import Tile from '../tile';

export default function RandomWordFetcher() {

    const { registerCallback } = useColor();

    const [word, setWord] = useState('');

    const getWord = () => {
        fetch('http://random-word-api.herokuapp.com/word')
            .then(response => response.json())
            .then(([ word ]) => setWord(word))
    }

    useEffect(() => {
        registerCallback(getWord);
    }, []);

    return <Tile level="child" className="hero has-background-black">
        <HeroBody>
            <p className="title has-text-light is-size-3 has-text-centered ">
                {
                    word
                }
            </p>
        </HeroBody>
    </Tile>;
}