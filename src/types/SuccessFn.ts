import { SuccessResult } from './SuccessResult';

export type SuccessFn = {
  <T>(data: T): SuccessResult<T>;
  (): SuccessResult<void>;
};
