import type {ChangeEvent, FC} from 'react';
import {useState} from 'react';
import {noop} from '../../_internal/utils/noop.js';
import Heading from '../typography/Heading.js';
import SwitchComponent, {
  SwitchGroup as SwitchGroupComponent,
} from './Switch.js';

const meta = {
  title: 'Base/Forms/Controls/Switch',
  component: SwitchComponent,
};

export const Switch: FC = () => {
  const [checked, setChecked] = useState<boolean | undefined>();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);
  return (
    <div className="space-y-4">
      <Heading>States</Heading>
      <table className="cells-px-4 cells-py-2 text-left">
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
              <SwitchComponent checked onChange={noop} />
            </td>
            <td>
              <SwitchComponent readOnly checked onChange={noop} />
            </td>
            <td>
              <SwitchComponent disabled checked onChange={noop} />
            </td>
            <td>
              <SwitchComponent valid checked onChange={noop} />
            </td>
            <td>
              <SwitchComponent valid={false} checked onChange={noop} />
            </td>
            <td>
              <SwitchComponent vertical checked onChange={noop} />
            </td>
          </tr>
          <tr>
            <th scope="row">Off</th>
            <td>
              <SwitchComponent checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchComponent readOnly checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchComponent disabled checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchComponent valid checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchComponent valid={false} checked={false} onChange={noop} />
            </td>
            <td>
              <SwitchComponent vertical checked={false} onChange={noop} />
            </td>
          </tr>
          <tr>
            <th scope="row">Interactive</th>
            <td>
              <SwitchComponent checked={checked} onChange={handleChange} />
            </td>
            <td>
              <SwitchComponent
                readOnly
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchComponent
                disabled
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchComponent
                valid
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchComponent
                valid={false}
                checked={checked}
                onChange={handleChange}
              />
            </td>
            <td>
              <SwitchComponent
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
        <label>
          On: <SwitchComponent inline checked onChange={noop} />
        </label>{' '}
        <label>
          Off: <SwitchComponent inline checked={false} onChange={noop} />
        </label>{' '}
        <label>
          Interactive:{' '}
          <SwitchComponent inline checked={checked} onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          On: <SwitchComponent inline vertical checked onChange={noop} />
        </label>{' '}
        <label>
          Off:{' '}
          <SwitchComponent inline vertical checked={false} onChange={noop} />
        </label>{' '}
        <label>
          Interactive:{' '}
          <SwitchComponent
            inline
            vertical
            checked={checked}
            onChange={handleChange}
          />
        </label>
      </p>
    </div>
  );
};

export const SwitchGroup: FC = () => (
  <SwitchGroupComponent label="Label" checked onChange={noop} />
);

export default meta;
