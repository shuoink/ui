import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Label as LabelComponent} from './Label';

const meta: Meta = {
  title: 'Forms/Layout/Label',
  component: LabelComponent,
};

export const Label: VFC = () => <LabelComponent>Label Text</LabelComponent>;

export default meta;
