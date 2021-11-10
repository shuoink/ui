import type {FC, ReactNode} from 'react';
import type {Unstyled} from '../../types';

const FormGroup: FC<Unstyled<'div'> & {label: ReactNode; labelFor?: string}> =
  ({children, label, labelFor, ...props}) => (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </div>
  );

export default FormGroup;
