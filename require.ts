import assert from '@quentinadam/assert';

export default function require<T>(value: T | undefined | null, error?: Error | string): T {
  assert(value !== undefined && value !== null, error);
  return value;
}
