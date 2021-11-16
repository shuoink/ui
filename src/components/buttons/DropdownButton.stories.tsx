import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {DropdownButton as DropdownButtonComponent} from './DropdownButton';

const meta: Meta = {
  title: 'Buttons/DropdownButton',
  component: DropdownButtonComponent,
};

const menu = (
  <div className="whitespace-pre border-2 bg-white shadow-lg p-4">
    this is a menu i guess. this is a menu i guess.
  </div>
);

export const DropdownButton: VFC = () => (
  <div className="flex flex-wrap gap-2">
    <DropdownButtonComponent
      label="Dropdown Button (bottom-left)"
      placement="bottom-left"
    >
      {menu}
    </DropdownButtonComponent>
    <DropdownButtonComponent
      label="Dropdown Button (bottom-right)"
      placement="bottom-right"
    >
      {menu}
    </DropdownButtonComponent>
  </div>
);

export default meta;
