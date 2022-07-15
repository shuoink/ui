import type {FC} from 'react';
import {Card as Component} from './Card.js';

const meta = {
  title: 'Base/Layout/Card',
  component: Component,
};

export const Card: FC = () => (
  <div className="w-48">
    <Component>{'This is a card. '.repeat(20)}</Component>
  </div>
);

export default meta;
