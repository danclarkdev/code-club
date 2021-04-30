import React from 'react';

import Container from './components/container';
import Section from './components/section';
import Tile from './components/tile';

import './App.scss';
import Publisher from './components/publisher';
import colorCreated, { NAME as colorCreatedEvent } from './models/event-bus/events/color-created';
import { ColorMaker } from './models/color-maker';
import Subscriber from './components/subscriber';
import ColorDisplay from './components/color-display';

function App() {
  return (
    <>
      <Section className="has-background-grey-lighter">
        <h2 className="has-text-centered title is-4">Publishers</h2>
        <Container>
          <Tile className="is-vertical" level="ancestor">

            {/* Top row */}
            <Tile>
              <Tile level="parent">
                <Publisher event={colorCreated} publishable={ColorMaker}>
                  {
                    ({
                      value: color
                    }) => <div>
                        {
                          color ? `I just published the color ${color}` : null
                        }
                      </div>
                  }
                </Publisher>
              </Tile>
              <Tile level="parent">
                2
              </Tile>
            </Tile>

          </Tile>
        </Container>
      </Section>
      <Section className="has-background-light">
        <h2 className="has-text-centered title is-4">Subscribers</h2>
        <Container>
          <Tile className="is-vertical" level="ancestor">

            {/* Top row */}
            <Tile>
              <Tile level="parent">
                <Subscriber event={colorCreatedEvent} onEvent={({ value }, childProps, setChildProps) => setChildProps({
                  ...childProps,
                  color: value
                })}>
                  {
                    ({
                      color
                    }) => <div>
                      {
                        color ? `I'm subscribed to colors and I just received ${color}` : `I'm subscribed to colors`
                      }
                    </div>
                  }
                </Subscriber>
              </Tile>
              <Tile level="parent">
                2
              </Tile>
            </Tile>

            {/* Bottom row */}
            <Tile>
              <Tile level="parent">
                3
              </Tile>
              <Tile level="parent">
                4
              </Tile>
            </Tile>

          </Tile>
        </Container>
      </Section>
    </>
  );
}

export default App;
