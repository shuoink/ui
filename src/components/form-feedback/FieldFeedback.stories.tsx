import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {TextInput} from '../form-controls/TextInput';
import {FieldFeedback as FieldFeedbackComponent} from './FieldFeedback';

const meta: Meta = {
  title: 'Forms/Feedback/Field Feedback',
  component: FieldFeedbackComponent,
};

export const Invalid: VFC = () => (
  <>
    <TextInput
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
