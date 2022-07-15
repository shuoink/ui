import type {Dispatch, ReactNode, SetStateAction, FC} from 'react';
import {useRef, useCallback, useState} from 'react';
import {usePopper} from 'react-popper';
import {ExitContext} from '../../_internal/contexts/ExitContext.js';
import {useCloseOnClickOutside} from '../../_internal/hooks/useCloseOnClickOutside.js';

export type Menu = {id: number | string; label: ReactNode; children: ReactNode};

type Props = {
  menus: Array<Menu>;
};

const TopNavMenu: FC<
  Menu & {
    activeMenu: Menu['id'] | null;
    setActiveMenu: Dispatch<SetStateAction<Menu['id'] | null>>;
  }
> = ({id, label, children, activeMenu, setActiveMenu}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>(null);
  const [dropdownElement, setDropdownElement] =
    useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const {styles, attributes} = usePopper(referenceElement, dropdownElement, {
    placement: 'bottom',
    modifiers: [
      {name: 'arrow', options: {element: arrowElement}},
      {name: 'offset', options: {offset: [0, 10]}},
    ],
  });
  const toggleMenu = (menuId: Menu['id']) => () => {
    if (activeMenu === menuId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuId);
    }
  };

  return (
    <>
      <button
        ref={setReferenceElement}
        type="button"
        onClick={toggleMenu(id)}
        onMouseEnter={e => {
          if (activeMenu != null && activeMenu !== id) {
            setActiveMenu(id);
          }
        }}
        className="text-xl hover:text-primary-500"
      >
        {label}
      </button>
      {activeMenu === id && (
        <div
          ref={setDropdownElement}
          style={styles.popper}
          {...attributes.popper}
          className="pt-2 z-50"
        >
          <div ref={setArrowElement} style={styles.arrow} className="top-0">
            <div
              className="w-[18px] h-[18px] bg-white border-black border-l border-t rotate-45"
              style={{clipPath: 'polygon(-50% -50%, -50% 150%, 150% -50%)'}}
            />
          </div>
          <div className="rounded bg-white border border-black shadow p-2">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export const TopNav: FC<Props> = ({menus}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<Menu['id'] | null>(null);
  const close = useCallback(() => setActiveMenu(null), [setActiveMenu]);
  useCloseOnClickOutside(activeMenu != null, close, ref);

  const nav = (
    <nav ref={ref}>
      <ul className="flex justify-center gap-10">
        {menus.map(menu => (
          <li key={menu.id}>
            <TopNavMenu
              {...menu}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </li>
        ))}
      </ul>
    </nav>
  );

  if (activeMenu) {
    return <ExitContext.Provider value={close}>{nav}</ExitContext.Provider>;
  }
  return nav;
};
