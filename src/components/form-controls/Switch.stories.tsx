import type {ChangeEvent, VFC} from 'react';
import {useState} from 'react';
import type {Meta} from '@storybook/react';
import {noop} from '../../utils/noop';
import {Heading} from '../..';
import {Switch as SwitchControl} from './Switch';

const meta: Meta = {
  title: 'Components/Form Controls/Switch',
  component: SwitchControl,
};

export const Switch: VFC = () => {
  const [checked, setChecked] = useState<boolean | undefined>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  return (
    <div className="space-y-4">
      <Heading>States</Heading>
      <table className="cells-px-4 text-left">
        <thead>
          <tr>
            <td />
            <th>Enabled</th>
            <th>Readonly</th>
            <th>Disabled</th>
            <th>Valid</th>
            <th>Invalid</th>
            <th>Vertical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">On</th>
            <td>
              <SwitchControl checked onChange={noop} />
            </td>
            <td>
              <SwitchControl readOnly checked onChange={noop} />
            </td>
            <td>
              <SwitchControl disabled checked onChange={noop} />
            </td>
            <td>
              <SwitchControl valid checked onChange={noop} />
            </td>
            <td>
              <SwitchControl valid={false} checked onChange={noop} />
            </td>
            <td>
              <SwitchControl vertical checked onChange={noop} />
            </td>
          </tr>
          <tr>
            <th scope="row">Off</th>
            <td>
              <SwitchControl checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl readOnly checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl disabled checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl valid checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl valid={false} checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl vertical checked={false} onChange={noop} />
            </td>
          </tr>
          <tr>
            <th scope="row">Indeterminate</th>
            <td>
              <SwitchControl onChange={noop} />
            </td>
            <td>
              <SwitchControl readOnly onChange={noop} />
            </td>
            <td>
              <SwitchControl disabled onChange={noop} />
            </td>
            <td>
              <SwitchControl valid onChange={noop} />
            </td>
            <td>
              <SwitchControl valid={false} onChange={noop} />
            </td>
            <td>
              <SwitchControl vertical onChange={noop} />
            </td>
          </tr>
          <tr>
            <th scope="row">Controlled</th>
            <td>
              <SwitchControl checked={checked} onChange={handleChange} />
            </td>
            <td>
              <SwitchControl
                readOnly
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchControl
                disabled
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchControl valid checked={checked} onChange={handleChange} />
            </td>
            <td>
              <SwitchControl
                valid={false}
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchControl
                vertical
                checked={checked}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Heading>Inline</Heading>
      <p>
        On: <SwitchControl inline checked onChange={noop} /> Off:{' '}
        <SwitchControl inline checked={false} onChange={noop} /> Indeterminate:{' '}
        <SwitchControl inline onChange={noop} /> Controlled:{' '}
        <SwitchControl inline checked={checked} onChange={handleChange} />
      </p>
      <p>
        On: <SwitchControl inline vertical checked onChange={noop} /> Off:{' '}
        <SwitchControl inline vertical checked={false} onChange={noop} />{' '}
        Indeterminate: <SwitchControl inline vertical onChange={noop} />{' '}
        Controlled:{' '}
        <SwitchControl
          inline
          vertical
          checked={checked}
          onChange={handleChange}
        />
      </p>
    </div>
  );
};

export default meta;
