import * as pushpop from '@spudly/pushpop';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';

const {isNotNil, unique} = defaultImport(pushpop);

const clsx = defaultImport(_clsx);

export type DockSideProperty = 'border' | 'borderRadius' | 'padding';

export type DockSideConfig = Array<DockSideProperty> | false | true | null;

export type DockConfig = {
  /** appear docked to the element above */
  top?: DockSideConfig;
  /** appear docked to the element below */
  bottom?: DockSideConfig;
  /** appear docked to the element to the left */
  left?: DockSideConfig;
  /** appear docked to the element right */
  right?: DockSideConfig;
};

const UNDOCKED_SIDE = {
  border: false,
  borderRadius: false,
  padding: false,
};

const DEFAULT_DOCK_SIDE = {
  border: true,
  borderRadius: true,
  padding: false,
};

type NormalizedDockConfig = {
  [SIDE in keyof DockConfig]-?: {
    [PROPERTY in DockSideProperty]-?: boolean;
  };
};

const normalizeDockConfig = (config: DockConfig): NormalizedDockConfig => {
  const normalized: NormalizedDockConfig = {
    top: UNDOCKED_SIDE,
    bottom: UNDOCKED_SIDE,
    left: UNDOCKED_SIDE,
    right: UNDOCKED_SIDE,
  };
  const sides: Array<keyof DockConfig> = ['top', 'bottom', 'left', 'right'];
  sides.forEach(side => {
    const sideConfig = config[side];
    if (sideConfig === true) {
      normalized[side] = DEFAULT_DOCK_SIDE;
    } else if (sideConfig) {
      normalized[side] = {
        border: sideConfig.includes('border'),
        borderRadius: sideConfig.includes('borderRadius'),
        padding: sideConfig.includes('padding'),
      };
    } else {
      normalized[side] = UNDOCKED_SIDE;
    }
  });
  return normalized;
};

export const getDockClasses = (config: DockConfig = {}): string => {
  const {top, right, bottom, left} = normalizeDockConfig(config);
  return clsx({
    'rounded-t-none': top.borderRadius,
    'rounded-r-none': right.borderRadius,
    'rounded-b-none': bottom.borderRadius,
    'rounded-l-none': left.borderRadius,

    'border-t-0': top.border,
    'border-r-0': right.border,
    'border-b-0': bottom.border,
    'border-l-0': left.border,

    'pt-0': top.padding,
    'pr-0': right.padding,
    'pb-0': bottom.padding,
    'pl-0': left.padding,
  });
};

export const mergeDockConfigs = (
  ...configs: Array<DockConfig | null | undefined>
): DockConfig => {
  const mergedConfig: DockConfig = {};
  const sides: Array<keyof DockConfig> = ['top', 'bottom', 'left', 'right'];
  for (const side of sides) {
    mergedConfig[side] = unique(
      configs
        .map(config => config?.[side])
        .filter(isNotNil)
        .flatMap(
          // eslint-disable-next-line no-confusing-arrow -- conflicts with prettier
          (sc): Array<DockSideProperty> =>
            sc === true ? ['border', 'borderRadius'] : sc === false ? [] : sc,
        ),
    );
  }
  return mergedConfig;
};
