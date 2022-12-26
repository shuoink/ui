const isEmptyOrNil = (value: unknown): boolean => {
  if (value == null) {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  return false;
};

export default isEmptyOrNil;
