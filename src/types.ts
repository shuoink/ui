export type Unstyled<ELEMENT_TYPE extends keyof JSX.IntrinsicElements> = Omit<
  JSX.IntrinsicElements[ELEMENT_TYPE],
  'className' | 'style'
>;

export type DockConfig = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  preserveBorder?: true;
};

export type FieldMeta = {
  touched?: boolean;
  valid?: boolean | null;
  dock?: DockConfig;
  block?: boolean;
  isRadio?: boolean;
  displayName?: string;
  errors?: Array<string>;
};
