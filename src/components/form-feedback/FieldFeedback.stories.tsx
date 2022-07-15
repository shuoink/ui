import type {FC} from 'react';
import TextInput from '../form-controls/TextInput.js';
import FieldFeedbackComponent from './FieldFeedback.js';

const meta = {
  title: 'Base/Forms/Feedback/Field Feedback',
  component: FieldFeedbackComponent,
};

export const Invalid: FC = () => (
  <>
    <TextInput
      value="invalid value"
      meta={{dock: {bottom: true}, touched: true, valid: false}}
    />
    <FieldFeedbackComponent
      dock={{top: ['borderRadius']}}
      displayName="Name"
      touched
      errors={['Name is invalid!']}
    />
  </>
);

export default meta;
