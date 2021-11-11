import classnames from 'classnames';

export const getValidityClasses = (
  isValid: boolean | null | undefined,
  defaults = '',
): string =>
  classnames({
    [defaults]: isValid == null,
    'bg-good-100 border-good-500 text-good-500': isValid === true,
    'bg-bad-100 border-bad-500 text-bad-500': isValid === false,
  });
