import type {FC, ReactNode} from 'react';
import {useEffect} from 'react';
import {MdClose} from 'react-icons/md/index.js';
import {Backdrop} from './Backdrop.js';

export const Dialog: FC<{
  header?: ReactNode;
  footer?: ReactNode;
  close: () => void;
  children?: ReactNode;
}> = ({header, footer, children, close}) => {
  useEffect(() => {
    const handleKeyDown = ({key}: KeyboardEvent) => {
      if (key === 'Escape') {
        close();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  return (
    <>
      <Backdrop dark close={close} />
      <dialog
        open
        className="z-20 w-3/4 shadow-2xl bg-white fixed top-1/2 -translate-y-1/2 max-h-[75vh] flex flex-col p-0"
      >
        <button
          type="button"
          className="text-2xl transform hover:scale-150 absolute top-0 right-0 p-2 duration-200 focus:outline-none"
          onClick={close}
        >
          <MdClose />
        </button>
        {header}
        <div className="flex-1 h-full overflow-auto p-2">{children}</div>
        {footer}
      </dialog>
    </>
  );
};
