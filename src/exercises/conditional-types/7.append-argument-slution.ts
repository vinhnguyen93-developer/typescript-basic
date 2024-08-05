type AppendArgument<
  F extends (...args: any) => any,
  D extends any
> = F extends (...args: infer A) => infer P ? (X: D, ...args: A) => P : any;
type SomeF = (a: number, b: string) => number;
type FinalF = AppendArgument<SomeF, boolean>;
// FinalF is (x: boolean, a: number, b: string) => number
