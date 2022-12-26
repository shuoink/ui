import type {FC} from 'react';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import {getDockClasses} from '../../_internal/utils/dock.js';
import {getValidityClasses} from '../../_internal/utils/getValidityClasses.js';
import type {FieldMeta} from '../../_internal/utils/types.js';
import isEmptyOrNil from '../../_internal/utils/isEmptyOrNil.js';

const clsx = defaultImport(_clsx);

const FieldFeedback: FC<FieldMeta> = ({
  displayName,
  touched,
  errors,
  dock = {},
}) => {
  const isValid = isEmptyOrNil(errors);
  if (!touched || isValid) {
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
      <ul>
        {errors?.map((error, index) => (
          // eslint-disable-next-line react/no-array-index-key -- meh
          <li key={index}>
            {error.replace(/\[name\]/u, displayName ?? 'Field')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FieldFeedback;
