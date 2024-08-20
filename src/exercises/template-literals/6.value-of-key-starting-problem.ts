export type Obj = {
  a: 'a';
  a2: 'a2';
  a3: 'a3';
  b: 'b';
  b1: 'b1';
  b2: 'b2';
};

type StartWithA<T> = T extends `a${infer R}` ? `a${R}` : never;

type ValuesOfKeysStartingWithA<Obj> = {
  [K in keyof Obj as `${Extract<keyof Obj, StartWithA<keyof Obj>>}`]: string;
};

type NewUnion = ValuesOfKeysStartingWithA<Obj>;
// type NewUnion = "a" | "a2" | "a3";
