import { Result, SuccessResult } from './types';

export const isSuccess = <TData, TReason>(
  result: Result<TData, TReason>
): result is SuccessResult<TData> => result.success;
