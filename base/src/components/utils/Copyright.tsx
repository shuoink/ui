import type {VFC} from 'react';

export const Copyright: VFC<{holder: string; start: number}> = ({
  holder,
  start,
}) => {
  const current = new Date().getFullYear();
  return (
    <>
      &copy; {current !== start ? `${start} - ${current}` : current} {holder}
    </>
  );
};
