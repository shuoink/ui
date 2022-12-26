import type {FC} from 'react';
import TextAreaComponent, {
  TextAreaGroup as TextAreaGroupComponent,
} from './TextArea.js';

const meta = {
  title: 'Base/Forms/Controls/TextArea',
  component: TextAreaComponent,
};

export const TextArea: FC = () => <TextAreaComponent value="value" />;

export const TextAreaGroup: FC = () => (
  <TextAreaGroupComponent label="Label" value="value" />
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <TextAreaComponent value="valid" meta={{touched: true}} />
    <TextAreaComponent
      value="invalid"
      meta={{touched: true, errors: ['invalid']}}
    />
  </div>
);

export const Docked: FC = () => (
  <div className="flex gap-2">
    <TextAreaComponent value="left" meta={{dock: {left: true}}} />
    <TextAreaComponent value="right" meta={{dock: {right: true}}} />
    <TextAreaComponent value="top" meta={{dock: {top: true}}} />
    <TextAreaComponent value="bottom" meta={{dock: {bottom: true}}} />

    <TextAreaComponent
      value="all"
      meta={{dock: {left: true, right: true, top: true, bottom: true}}}
    />

    <TextAreaComponent
      value="left, preserveBorder"
      meta={{dock: {left: ['borderRadius']}}}
    />
    <TextAreaComponent
      value="right, preserveBorder"
      meta={{dock: {right: ['borderRadius']}}}
    />
    <TextAreaComponent
      value="top, preserveBorder"
      meta={{dock: {top: ['borderRadius']}}}
    />
    <TextAreaComponent
      value="bottom, preserveBorder"
      meta={{dock: {bottom: ['borderRadius']}}}
    />

    <TextAreaComponent
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
