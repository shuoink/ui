import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {Backdrop as Component} from './Backdrop';

const meta: Meta = {
  title: 'Overlays/Backdrop',
  component: Component,
};

export const Backdrop: VFC = () => {
  const [isOpen, open, close] = useToggle(true);
  return (
    <>
      <Button onClick={open}>Open</Button>
      {isOpen && <Component dark close={close} />}
    </>
  );
};

export default meta;
