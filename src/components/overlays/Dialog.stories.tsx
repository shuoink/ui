import type {FC} from 'react';
import {noop} from '../../_internal/utils/noop.js';
import {Heading} from '../typography/Heading.js';
import {Dialog as Component} from './Dialog.js';

const meta = {
  title: 'Base/Overlays/Dialog',
  component: Component,
};

export const Dialog: FC = () => {
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
