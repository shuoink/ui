import type {FC} from 'react';
import type {FieldMeta} from '../..';
import type {Unstyled} from '../../types';
import {getFieldClasses} from '../utils/getFieldClasses';

export const Input: FC<Unstyled<'input'> & {meta?: FieldMeta}> = ({
  meta,
  ...rest
}) => <input {...rest} className={getFieldClasses(meta)} />;
