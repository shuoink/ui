import type {FC} from 'react';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import Button from '../buttons/Button.js';
import Component from './Backdrop.js';

const meta = {
  title: 'Base/Overlays/Backdrop',
  component: Component,
};

export const Backdrop: FC = () => {
  const [isOpen, open, close] = useToggle(true);
  return (
    <>
      <Button onClick={open}>Open</Button>
      {isOpen && <Component dark close={close} />}
    </>
  );
};

export default meta;
