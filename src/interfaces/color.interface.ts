export interface IColor<T = number> {
  a?: T | undefined;
  string?: () => string;
}
