export type SuccessResult<T> = {
  success: true;
  data: T;
};

export const success = <T>(data: T): SuccessResult<T> => ({
  success: true,
  data
});
