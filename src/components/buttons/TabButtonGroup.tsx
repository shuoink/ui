import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../_internal/utils/dock.js';
import ButtonGroup from './ButtonGroup.js';

const DEFAULT_DOCK: DockConfig = {bottom: true};

const TabButtonGroup: FC<ComponentProps<typeof ButtonGroup>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <ButtonGroup dock={dock} {...rest} />;

export default TabButtonGroup;
