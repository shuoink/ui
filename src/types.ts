import type {FC, VFC} from 'react';

export type DemoMeta = {
  title: string;
};

export type DemoModule = {
  [key: string]: VFC;
} & {
  default: DemoMeta;
};

export type Unstyled<ELEMENT_TYPE extends keyof JSX.IntrinsicElements> = FC<
  Omit<JSX.IntrinsicElements[ELEMENT_TYPE], 'className' | 'style'>
>;
