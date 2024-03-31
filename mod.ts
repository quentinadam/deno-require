import assert from 'jsr:@quentinadam/assert@^0.1.1';

export default function require<T>(value: T | undefined | null, error?: Error | string): T {
  assert(value !== undefined && value !== null, error);
  return value;
}
