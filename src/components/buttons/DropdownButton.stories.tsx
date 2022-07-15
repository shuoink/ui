import type {FC} from 'react';
import DropdownButtonComponent from './DropdownButton.js';

const meta = {
  title: 'Base/Buttons/DropdownButton',
  component: DropdownButtonComponent,
};

const menu = (
  <div className="whitespace-pre border-2 bg-white shadow-lg p-4">
    this is a menu i guess. this is a menu i guess.
  </div>
);

export const DropdownButton: FC = () => (
  <div className="flex flex-wrap gap-2">
    <DropdownButtonComponent
      label="Dropdown Button (bottom-left)"
      placement="left-end"
    >
      {menu}
    </DropdownButtonComponent>
    <DropdownButtonComponent
      label="Dropdown Button (bottom-right)"
      placement="right-end"
    >
      {menu}
    </DropdownButtonComponent>
  </div>
);

export default meta;
