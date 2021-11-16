export const isValidHashHref = (href: string): boolean =>
  href.startsWith('#') && href.length > 1;
