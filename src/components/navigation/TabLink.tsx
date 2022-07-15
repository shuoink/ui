import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../_internal/utils/dock.js';
import {ButtonLink} from './ButtonLink.js';

const DEFAULT_DOCK: DockConfig = {bottom: true};

export const TabLink: FC<ComponentProps<typeof ButtonLink>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <ButtonLink dock={dock} {...rest} />;
