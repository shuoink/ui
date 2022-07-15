import type {FC} from 'react';
import type {Menu} from './TopNav.js';
import {TopNav as Component} from './TopNav.js';

const meta = {
  title: 'Base/Navigation/TopNav',
  component: Component,
};

const menus: Array<Menu> = [
  {id: 0, label: 'One', children: <div>stuff</div>},
  {id: 1, label: 'Two', children: <div>stuff</div>},
  {id: 2, label: 'Three', children: <div>stuff</div>},
];

export const TopNav: FC = () => (
  <>
    <Component menus={menus} />
  </>
);

export default meta;
