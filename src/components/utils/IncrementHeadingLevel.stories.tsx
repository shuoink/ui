import type {VFC} from 'react';
import {useContext} from 'react';
import type {Meta} from '@storybook/react';
import {HeadingLevelContext} from '../../contexts/HeadingLevelContext';
import {IncrementHeadingLevel as Component} from './IncrementHeadingLevel';

const meta: Meta = {
  title: 'Utils/IncrementHeadingLevel',
  component: Component,
};

const LevelIndicator: VFC = () => {
  const level = useContext(HeadingLevelContext) ?? 0;
  return <div className="whitespace-pre">Level: {level}</div>;
};

export const IncrementHeadingLevel: VFC = () => (
  <div className="border-l border-black pl-2">
    <LevelIndicator />
    <div className="border-l border-black pl-2">
      <Component>
        <LevelIndicator />
        <div className="border-l border-black pl-2">
          <Component>
            <LevelIndicator />
            <div className="border-l border-black pl-2">
              <Component>
                <LevelIndicator />
                <div className="border-l border-black pl-2">
                  <Component>
                    <LevelIndicator />
                    <div className="border-l border-black pl-2">
                      <Component>
                        <LevelIndicator />
                        <div className="border-l border-black pl-2">
                          <Component>
                            <LevelIndicator />
                            <div className="border-l border-black pl-2">
                              <Component>
                                <LevelIndicator />
                              </Component>
                            </div>
                            <LevelIndicator />
                          </Component>
                        </div>
                        <LevelIndicator />
                      </Component>
                    </div>
                    <LevelIndicator />
                  </Component>
                </div>
                <LevelIndicator />
              </Component>
            </div>
            <LevelIndicator />
          </Component>
        </div>
        <LevelIndicator />
      </Component>
    </div>
    <LevelIndicator />
  </div>
);

export default meta;
