import type {FC} from 'react';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import {getDockClasses} from '../../_internal/utils/dock.js';
import {getValidityClasses} from '../../_internal/utils/getValidityClasses.js';
import type {FieldMeta} from '../../_internal/utils/types.js';

const clsx = defaultImport(_clsx);

export const FieldFeedback: FC<FieldMeta> = ({
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
      className={clsx(
        'border p-2 text-xl rounded-md',
        dockClasses,
        validityClasses,
      )}
    >
      {errors?.map(error => error.replace(/\[name\]/u, displayName ?? 'Field'))}
    </div>
  );
};
