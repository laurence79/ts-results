export type SuccessResult<T> = T extends void
  ? { success: true }
  : {
      success: true;
      data: T;
    };
