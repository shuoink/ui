const isAbsoluteUrl = (url: string): boolean => /^[a-z]+:\/\//iu.test(url);

export default isAbsoluteUrl;
