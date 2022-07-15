import type {FC} from 'react';
import Component from './Polaroid.js';

const meta = {
  title: 'Base/Media/Polaroid',
  component: Component,
};

export const Polaroid: FC = () => (
  <Component>
    <img src="https://www.fillmurray.com/300/300" alt="Bill Murray" />
  </Component>
);

export default meta;
