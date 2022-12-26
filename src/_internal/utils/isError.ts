const isError = (value: unknown): value is Error => value instanceof Error;

export default isError;
