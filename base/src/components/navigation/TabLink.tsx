import type {FC, ComponentProps} from 'react';
import type {DockConfig} from '../../utils/dock';
import {ButtonLink} from './ButtonLink';

const DEFAULT_DOCK: DockConfig = {bottom: true};

export const TabLink: FC<ComponentProps<typeof ButtonLink>> = ({
  dock = DEFAULT_DOCK,
  ...rest
}) => <ButtonLink dock={dock} {...rest} />;
