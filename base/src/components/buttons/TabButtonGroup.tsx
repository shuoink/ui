import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../utils/dock';
import {ButtonGroup} from './ButtonGroup';

const DEFAULT_DOCK: DockConfig = {bottom: true};

export const TabButtonGroup: FC<ComponentProps<typeof ButtonGroup>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <ButtonGroup dock={dock} {...rest} />;
