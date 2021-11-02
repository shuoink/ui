import type {ChangeEvent, VFC} from 'react';
import {useState} from 'react';
import type {Meta} from '@storybook/react';
import {noop} from '../../utils/noop';
import {Switch as SwitchControl} from './Switch';

const meta: Meta = {
  title: 'Components/Form Controls/Switch',
  component: SwitchControl,
};

export const Switch: VFC = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  return (
    <table className="cells-px-4 text-left">
      <thead>
        <tr>
          <td />
          <th>Enabled</th>
          <th>Disabled</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">On</th>
          <td>
            <SwitchControl checked onChange={noop} />
          </td>
          <td>
            <SwitchControl disabled checked onChange={noop} />
          </td>
        </tr>
        <tr>
          <th scope="row">Off</th>
          <td>
            <SwitchControl onChange={noop} />
          </td>
          <td>
            <SwitchControl disabled onChange={noop} />
          </td>
        </tr>
        <tr>
          <th scope="row">Controlled</th>
          <td>
            <SwitchControl checked={checked} onChange={handleChange} />
          </td>
          <td>
            <SwitchControl disabled checked={checked} onChange={handleChange} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default meta;
