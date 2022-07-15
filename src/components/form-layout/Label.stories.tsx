import type {FC} from 'react';
import {Label as LabelComponent} from './Label.js';

const meta = {
  title: 'Base/Forms/Layout/Label',
  component: LabelComponent,
};

export const Label: FC = () => <LabelComponent>Label Text</LabelComponent>;

export default meta;
