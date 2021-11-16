import type {
  ComponentProps,
  CSSProperties,
  ElementType,
  ReactElement,
} from 'react';

export type Unstyled<ELEMENT_TYPE extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[ELEMENT_TYPE],
  'className' | 'style'
>;

export type DockConfig = {
  /** appear docked to the element above */
  top?: boolean;
  /** appear docked to the element below */
  bottom?: boolean;
  /** appear docked to the element to the left */
  left?: boolean;
  /** appear docked to the element right */
  right?: boolean;
  /** don't remove the border when docked */
  preserveBorder?: true;
};

export type FieldMeta = {
  touched?: boolean;
  valid?: boolean | null;
  dock?: DockConfig;
  block?: boolean;
  isRadio?: boolean;
  isCheckbox?: boolean;
  displayName?: string;
  errors?: Array<string>;
};

export type BaseObject = {[key: string]: any};

export type EmptyObject = {[key: string]: never};

export type ClassNameProp<DATA> =
  | string
  | ((data: DATA & {className: string | undefined}) => string | undefined);

export type StyleProp<DATA> =
  | CSSProperties
  | ((
      data: DATA & {style: CSSProperties | undefined},
    ) => CSSProperties | undefined);

export type StyleableProps<
  ORIGINAL_PROPS extends BaseObject,
  DATA extends BaseObject = EmptyObject,
> = Omit<ORIGINAL_PROPS, 'className' | 'style'> & {
  className?: ClassNameProp<DATA>;
  style?: StyleProp<DATA>;
};

export type ElementOfType<TYPE extends ElementType> = ReactElement<
  ComponentProps<TYPE>,
  TYPE
>;
