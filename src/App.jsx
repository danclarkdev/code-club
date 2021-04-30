import React from 'react';

import Container from './components/container';
import Section from './components/section';
import Tile from './components/tile';

import './App.scss';
import Publisher from './components/publisher';
import colorCreated, { NAME as colorCreatedEvent } from './models/event-bus/events/color-created';
import { ColorMaker } from './models/color-maker';
import Subscriber from './components/subscriber';
import { DeltaMaker } from './models/delta-maker';
import delta, { NAME as deltaEvent } from './models/event-bus/events/delta';

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
                <Publisher event={delta} publishable={DeltaMaker}>
                  {
                    ({
                      value: number
                    }) => <div>
                        {
                          number ? `I just published the number ${number}` : null
                        }
                      </div>
                  }
                </Publisher>
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
                    }) => <div style={{ backgroundColor: color, width: 100, height: 100 }} className="notification"></div>
                  }
                </Subscriber>
              </Tile>
              <Tile level="parent">
                <Subscriber event={deltaEvent} onEvent={({ value }, childProps, setChildProps) => setChildProps({
                  ...childProps,
                  number: value
                })}>
                  {
                    ({
                      number
                    }) => <div style={{ width: 100, height: 100 }} className="is-size-2 is-danger notification">
                        {
                          number
                        }
                      </div>
                  }
                </Subscriber>
              </Tile>
            </Tile>

            {/* Bottom row */}
            <Tile>
              <Tile level="parent">
                <Subscriber event={deltaEvent} onEvent={({ value }, childProps, setChildProps) => setChildProps({
                  ...childProps,
                  number: value
                })}>
                  {
                    ({
                      number
                    }) => <div style={{ width: 100, height: 100, transform: `translate(${number}px, 0)`, transition: 'transform 200ms' }} className="is-size-4 is-link notification">
                        woah
                    </div>
                  }
                </Subscriber>
              </Tile>
              <Tile level="parent">
                <Subscriber event={colorCreatedEvent} onEvent={({ value }, childProps, setChildProps) => setChildProps({
                  ...childProps,
                  color: value
                })}>
                  {
                    ({
                      color
                    }) => <Subscriber event={deltaEvent} onEvent={({ value }, childProps, setChildProps) => setChildProps({
                      ...childProps,
                      number: value
                    })}>
                      {
                        ({
                          number
                        }) => <div style={{ backgroundColor: color, width: 100, height: 100, transform: `translate(0, ${number}px) rotate(${(Math.random() >= 0.5 ? -1 : 1) * (Math.random() * number)}deg)`, transition: 'transform 200ms' }} className="is-size-3 notification has-text-light">
                            wot
                        </div>
                      }
                    </Subscriber>
                  }
                </Subscriber>
                
              </Tile>
            </Tile>

          </Tile>
        </Container>
      </Section>
    </>
  );
}

export default App;
