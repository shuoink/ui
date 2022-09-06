import type {FC} from 'react';
import {MdExpandMore} from 'react-icons/md/index.js';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const Select: FC<Unstyled<'select'> & {meta?: FieldMeta}> = ({
  meta,
  ...props
}) => (
  <div className="relative isolate">
    <select
      {...props}
      // className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
      className={getFieldClasses(meta)}
    />
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <MdExpandMore />
    </div>
  </div>
);

export default Select;