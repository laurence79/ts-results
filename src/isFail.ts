import { FailResult, Result } from './types';

export const isFail = <TData, TReason>(
  result: Result<TData, TReason>
): result is FailResult<TReason> => !result.success;
