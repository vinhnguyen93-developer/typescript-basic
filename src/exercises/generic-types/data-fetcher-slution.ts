import { Equal, Expect } from '@/type-utils';
import { expect, it } from 'vitest';

const fetchData = async <T>(url: string): Promise<T> => {
  const data = await fetch(url).then((response) => response.json());
  return data;
};

const data = await fetchData<{ name: string }>(
  'https://swapi.dev/api/people/1'
);

type tests = [Expect<Equal<typeof data, { name: string }>>];
