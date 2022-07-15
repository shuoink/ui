import type {FC} from 'react';
import {useContext} from 'react';
import {HeadingLevelContext} from '../../_internal/contexts/HeadingLevelContext.js';
import {IncrementHeadingLevel as Component} from './IncrementHeadingLevel.js';

const meta = {
  title: 'Base/Utils/IncrementHeadingLevel',
  component: Component,
};

const LevelIndicator: FC = () => {
  const level = useContext(HeadingLevelContext) ?? 0;
  return <div className="whitespace-pre">Level: {level}</div>;
};

export const IncrementHeadingLevel: FC = () => (
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
