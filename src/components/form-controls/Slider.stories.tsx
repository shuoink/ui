import type {FC} from 'react';
import SliderComponent, {
  SliderGroup as SliderGroupComponent,
} from './Slider.js';

const meta = {
  title: 'Base/Forms/Controls/Slider',
  component: SliderComponent,
};

const options = (
  <>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
    <option value="6">Six</option>
    <option value="7">Seven</option>
    <option value="8">Eight</option>
    <option value="9">Nine</option>
    <option value="10">Ten</option>
  </>
);

export const Slider: FC = () => (
  <SliderComponent min={1} max={10} defaultValue={5}>
    {options}
  </SliderComponent>
);

export const SliderGroup: FC = () => (
  <SliderGroupComponent label="Label" min={1} max={10} defaultValue={5}>
    {options}
  </SliderGroupComponent>
);

export const Ticks: FC = () => (
  <SliderComponent min={1} max={10} defaultValue={5} showTicks>
    {options}
  </SliderComponent>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <SliderComponent value={5} meta={{touched: true}} />
    <SliderComponent value={5} meta={{touched: true, errors: ['invalid']}} />
  </div>
);

export default meta;
