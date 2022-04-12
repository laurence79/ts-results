import { Result } from './Result';

export type AsyncResult<TData, TReason> = Promise<Result<TData, TReason>>;
