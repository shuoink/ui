import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {noop} from '../../utils/noop';
import {Heading} from '../layout/Heading';
import {Dialog as Component} from './Dialog';

const meta: Meta = {
  title: 'Overlays/Dialog',
  component: Component,
};

export const Dialog: VFC = () => {
  return (
    <Component
      close={noop}
      header={<Heading>Header</Heading>}
      footer={<Heading>Footer</Heading>}
    >
      {'fhjkdlsafhjdkls '.repeat(1000)}
    </Component>
  );
};

export default meta;
