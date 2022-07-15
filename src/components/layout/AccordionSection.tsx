import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FC, ReactNode} from 'react';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import Button from '../buttons/Button.js';
import CollapsibleIcon from '../icons/CollapsibleIcon.js';
import Heading from '../typography/Heading.js';
import type {DockConfig} from '../../_internal/utils/dock.js';
import Collapsible from './Collapsible.js';

const clsx = defaultImport(_clsx);

const AccordionSection: FC<{
  heading: ReactNode;
  isOpen?: boolean;
  dock?: DockConfig;
  toggle?: () => void;
  children?: ReactNode;
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
            clsx('flex justify-between w-full', className)
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

export default AccordionSection;
