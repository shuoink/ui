import type {VFC} from 'react';
import classnames from 'classnames';
import {getDockClasses} from '../../utils/dock';
import {getValidityClasses} from '../../utils/getValidityClasses';
import type {FieldMeta} from '../../types';

export const FieldFeedback: VFC<FieldMeta> = ({
  displayName,
  touched,
  valid,
  errors,
  dock = {},
}) => {
  if (!touched || valid) {
    return null;
  }
  const dockClasses: string = getDockClasses(dock);
  const validityClasses: string = getValidityClasses(false);
  return (
    <div
      className={classnames(
        'border p-2 text-xl rounded-md',
        dockClasses,
        validityClasses,
      )}
    >
      {errors?.map(error => error.replace(/\[name\]/u, displayName ?? 'Field'))}
    </div>
  );
};
