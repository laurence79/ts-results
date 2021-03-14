import { Result } from './Result';

export type AsyncResult<TReason, TData = undefined> = Promise<
  Result<TReason, TData>
>;
