import { FailResult } from './types';

export const fail = <T>(reason: T): FailResult<T> => ({
  success: false,
  reason
});
