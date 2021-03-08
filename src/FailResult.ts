export type FailResult<T> = {
  success: false;
  reason: T;
};

export const fail = <T>(reason: T): FailResult<T> => ({
  success: false,
  reason
});
