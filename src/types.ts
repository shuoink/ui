import type {VFC} from 'react';

export type DemoMeta = {
  title: string;
};

export type DemoModule = {
  [key: string]: VFC;
} & {
  default: DemoMeta;
};
