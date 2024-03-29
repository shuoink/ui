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
      meta={{dock: {bottom: true}, touched: true, errors: ['invalid']}}
    />
    <FieldFeedbackComponent
      dock={{top: ['borderRadius']}}
      displayName="Name"
      touched
      errors={['Name is invalid!', 'Name is bad!']}
    />
  </>
);

export default meta;
