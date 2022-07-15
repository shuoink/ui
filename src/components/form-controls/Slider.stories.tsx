import type {FC} from 'react';
import Component from './Slider.js';

const meta = {
  title: 'Base/Forms/Controls/Slider',
  component: Component,
};

const options = (
  <>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </>
);

export const Slider: FC = () => (
  <Component min={1} max={10} defaultValue={5}>
    {options}
  </Component>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <Component value={5} meta={{touched: true, valid: true}} />
    <Component value={5} meta={{touched: true, valid: false}} />
  </div>
);

export default meta;
