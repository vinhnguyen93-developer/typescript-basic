export const makeKeyRemover =
  <K extends string>(keys: K[]) =>
  <O extends Record<string, any>>(obj: O): Omit<O, K> => {
    return obj;
  };

const keyRemover = makeKeyRemover(['a', 'b']);

const newObject = keyRemover({ a: 1, b: 2, c: 3 });
