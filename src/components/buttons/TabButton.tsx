import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../_internal/utils/dock.js';
import {Button} from './Button.js';

const DEFAULT_DOCK: DockConfig = {bottom: true};

export const TabButton: FC<ComponentProps<typeof Button>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <Button dock={dock} {...rest} />;
