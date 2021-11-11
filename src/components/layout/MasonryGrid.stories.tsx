import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {MasonryGrid as Component} from './MasonryGrid';
import {Card} from './Card';

const meta: Meta = {
  title: 'Components/Layout/Masonry Grid',
  component: Component,
};

const lengths = [10, 3, 16, 4, 9, 7, 2, 8, 5, 6, 1, 15];

export const MasonryGrid: VFC = () => {
  return (
    <Component>
      {lengths.map(length => (
        <Card key={length}>
          {"This is a Card and it's in a masonry grid! ".repeat(length)}
        </Card>
      ))}
      <Card>{'Card '.repeat(10)}</Card>
    </Component>
  );
};

export default meta;
