import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../utils/dock';
import {Button} from './Button';

const DEFAULT_DOCK: DockConfig = {bottom: true};

export const TabButton: FC<ComponentProps<typeof Button>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <Button dock={dock} {...rest} />;
