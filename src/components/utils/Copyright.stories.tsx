import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Copyright as Component} from './Copyright';

const meta: Meta = {
  title: 'Components/Utils/Copyright',
  component: Component,
};

export const Copyright: VFC = () => (
  <Component holder="Shuoink LLC" start={1802} />
);

export default meta;
