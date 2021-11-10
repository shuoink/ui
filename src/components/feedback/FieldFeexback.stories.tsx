import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Input} from '../form-controls/Input';
import {FieldFeedback as FieldFeedbackComponent} from './FieldFeedback';

const meta: Meta = {
  title: 'Components/Feedback/Field Feedback',
  component: FieldFeedbackComponent,
};

export const Invalid: VFC = () => (
  <>
    <Input
      value="invalid value"
      meta={{dock: {bottom: true}, touched: true, valid: false}}
    />
    <FieldFeedbackComponent
      dock={{top: true}}
      displayName="Name"
      touched
      errors={['Name is invalid!']}
    />
  </>
);

export default meta;
