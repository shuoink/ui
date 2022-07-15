import type {FC} from 'react';
import Component from './Copyright.js';

const meta = {
  title: 'Base/Utils/Copyright',
  component: Component,
};

export const Copyright: FC = () => (
  <Component holder="Shuoink LLC" start={1802} />
);

export default meta;
