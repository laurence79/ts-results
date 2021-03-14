import { FailResult } from './FailResult';
import { SuccessResult } from './SuccessResult';

export type Result<TData, TReason> = SuccessResult<TData> | FailResult<TReason>;
