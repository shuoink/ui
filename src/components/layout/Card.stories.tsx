import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Card as Component} from './Card';

const meta: Meta = {
  title: 'Layout/Card',
  component: Component,
};

export const Card: VFC = () => (
  <div className="w-48">
    <Component>{'This is a card. '.repeat(20)}</Component>
  </div>
);

export default meta;
