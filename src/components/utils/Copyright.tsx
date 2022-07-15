import type {FC} from 'react';

export const Copyright: FC<{holder: string; start: number}> = ({
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
