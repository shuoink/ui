import type {BaseObject, ClassNameProp, EmptyObject} from '../types';

export const getClassName = <DATA extends BaseObject = EmptyObject>(
  classNameProp: ClassNameProp<DATA> | undefined,
  styleData: DATA,
  defaultClassName?: string,
): string | undefined => {
  if (classNameProp == null) {
    return defaultClassName;
  }
  if (classNameProp instanceof Function) {
    return classNameProp({className: defaultClassName, ...styleData});
  }
  return classNameProp;
};
