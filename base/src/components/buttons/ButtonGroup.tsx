import type {ComponentProps, ReactElement, ReactNode, VFC} from 'react';
import {cloneElement, isValidElement, Children} from 'react';
import type {DockConfig} from '../../utils/dock';
import {mergeDockConfigs} from '../../utils/dock';
import {Button} from './Button';

type ButtonElement = ReactElement<ComponentProps<typeof Button>, typeof Button>;

type Props = {
  dock?: DockConfig;
  children?: Array<ButtonElement> | ButtonElement;
};

const isButton = (child: ReactNode): child is ButtonElement =>
  isValidElement(child) && child.type === Button;

export const ButtonGroup: VFC<Props> = ({dock, children}) => {
  const buttons = Children.toArray(children).filter(isButton);
  return (
    <div className="flex">
      {buttons.map((button, index) => {
        const isFirst = index === 0;
        const isLast = index === buttons.length - 1;
        return cloneElement(button, {
          dock: mergeDockConfigs(dock, button.props.dock, {
            left: isFirst ? undefined : true,
            right: isLast ? undefined : true,
          }),
        });
      })}
    </div>
  );
};
