import React from 'react';

import ColorAnalyzer from './components/color-analyzer';
import ColorChanger from './components/color-changer';
import ColorList from './components/color-list';
import Container from './components/container';
import RandomWordFetcher from './components/random-word-fetcher';
import Section from './components/section';
import Tile from './components/tile';
import ColorProvider from './providers/color-provider';

import './App.scss';

function App() {
  return (
    <ColorProvider>
      <Section>
        <Container>
          <Tile className="is-vertical" level="ancestor">

            {/* Top row */}
            <Tile>
              <Tile level="parent">
                <ColorChanger />
              </Tile>
              <Tile level="parent">
                <ColorList />
              </Tile>
            </Tile>

            {/* Bottom row */}
            <Tile>
              <Tile level="parent">
                <ColorAnalyzer />
              </Tile>
              <Tile level="parent">
                <RandomWordFetcher />
              </Tile>
            </Tile>
            
          </Tile>
        </Container>
      </Section>
    </ColorProvider>
  );
}

export default App;
