import { SuccessFn } from './types';

export const success: SuccessFn = <T>(data?: T) => {
  if (data === undefined) {
    return { success: true } as const;
  }

  return {
    success: true as const,
    data
  };
};
