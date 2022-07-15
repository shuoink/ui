import type {FC, ReactNode} from 'react';
import {isValidElement, Children} from 'react';

const LinkList: FC<{heading?: ReactNode; children?: ReactNode}> = ({
  heading,
  children,
}) => {
  return (
    <div>
      <div className="text-primary-500 uppercase">{heading}</div>
      <ul>
        {/* eslint-disable-next-line no-confusing-arrow -- conflicts with prettier */}
        {Children.map(children, (child, index) =>
          isValidElement(child) ? (
            <li key={child.key ?? index}>{child}</li>
          ) : (
            child
          ),
        )}
      </ul>
    </div>
  );
};

export default LinkList;
