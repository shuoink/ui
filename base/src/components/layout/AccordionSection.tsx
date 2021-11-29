import classNames from 'classnames';
import type {FC, ReactNode} from 'react';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {CollapsibleIcon} from '../icons/CollapsibleIcon';
import {Heading} from '../typography/Heading';
import type {DockConfig} from '../../utils/dock';
import {Collapsible} from './Collapsible';

export const AccordionSection: FC<{
  heading: ReactNode;
  isOpen?: boolean;
  dock?: DockConfig;
  toggle?: () => void;
}> = ({children, dock, heading, isOpen: isOpenProp, toggle: toggleProp}) => {
  const [_isOpen, , , _toggle] = useToggle();
  const isOpen = isOpenProp != null ? isOpenProp : _isOpen;
  const toggle = isOpenProp != null ? toggleProp : _toggle;
  return (
    <>
      <Heading className="">
        <Button
          onClick={toggle}
          dock={dock}
          className={({className}) =>
            classNames('flex justify-between w-full', className)
          }
        >
          {heading}
          <CollapsibleIcon isOpen={isOpen} />
        </Button>
      </Heading>
      <Collapsible isOpen={isOpen}>
        <div className="p-2 border border-primary-600">{children}</div>
      </Collapsible>
    </>
  );
};
