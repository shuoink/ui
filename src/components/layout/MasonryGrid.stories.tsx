import type {FC} from 'react';
import Component from './MasonryGrid.js';
import Card from './Card.js';

const meta = {
  title: 'Base/Layout/Masonry Grid',
  component: Component,
};

const lengths = [10, 3, 16, 4, 9, 7, 2, 8, 5, 6, 1, 15];

export const MasonryGrid: FC = () => {
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
