import type {FC} from 'react';
import TextInputComponent, {
  TextInputGroup as TextInputGroupComponent,
} from './TextInput.js';

const meta = {
  title: 'Base/Forms/Controls/Text Input',
  component: TextInputComponent,
};

export const Input: FC = () => <TextInputComponent value="value" />;

export const InputGroup: FC = () => (
  <TextInputGroupComponent label="Label" value="value" />
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <TextInputComponent value="valid" meta={{touched: true}} />
    <TextInputComponent
      value="invalid"
      meta={{touched: true, errors: ['invalid']}}
    />
  </div>
);

export const Docked: FC = () => (
  <div className="flex gap-2">
    <TextInputComponent value="left" meta={{dock: {left: true}}} />
    <TextInputComponent value="right" meta={{dock: {right: true}}} />
    <TextInputComponent value="top" meta={{dock: {top: true}}} />
    <TextInputComponent value="bottom" meta={{dock: {bottom: true}}} />

    <TextInputComponent
      value="all"
      meta={{dock: {left: true, right: true, top: true, bottom: true}}}
    />

    <TextInputComponent
      value="left, preserveBorder"
      meta={{dock: {left: ['borderRadius']}}}
    />
    <TextInputComponent
      value="right, preserveBorder"
      meta={{dock: {right: ['borderRadius']}}}
    />
    <TextInputComponent
      value="top, preserveBorder"
      meta={{dock: {top: ['borderRadius']}}}
    />
    <TextInputComponent
      value="bottom, preserveBorder"
      meta={{dock: {bottom: ['borderRadius']}}}
    />

    <TextInputComponent
      value="all, preserveBorder"
      meta={{
        dock: {
          left: ['borderRadius'],
          right: ['borderRadius'],
          top: ['borderRadius'],
          bottom: ['borderRadius'],
        },
      }}
    />
  </div>
);

export default meta;
