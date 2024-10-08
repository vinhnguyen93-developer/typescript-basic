import { Equal, Expect } from '@/type-utils';

type X = Promise<string>;
type Y = Promise<{ field: number }>;

type ResultX = Transform<X>;
type ResultY = Transform<Y>;

type Transform<A> = A extends Promise<infer R> ? R : never;
type tests = [
  Expect<Equal<ResultX, string>>,
  Expect<Equal<ResultY, { field: number }>>
];
