import {createContext} from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export const HeadingLevelContext = createContext<HeadingLevel | null>(null);
