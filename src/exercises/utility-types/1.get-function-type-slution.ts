function total(a: number, b: number): number {
  return a + b;
}
type TotalReturnType = ReturnType<typeof total>;
// expected: type TotalReturnType = number;

export {};
