export type FailResult<T> = {
  success: false;
  reason: T;
};
