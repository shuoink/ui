import {createContext} from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

const HeadingLevelContext = createContext<HeadingLevel | null>(null);

export type {HeadingLevel};
export default HeadingLevelContext;
