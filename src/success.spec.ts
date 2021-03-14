import { success } from './success';
import { Result } from './types';

describe('success', () => {
  it('returns the expected data for void', () => {
    const fn = (): Result<void, 'NOT_FOUND'> => {
      return success();
    };

    const result = fn();

    expect(result).toEqual({ success: true });
    expect(Object.keys(result)).toEqual(['success']);
  });

  it('returns the expected data for not void', () => {
    const fn = (): Result<number, 'NOT_FOUND'> => {
      return success(1);
    };

    const result = fn();

    expect(result).toEqual({ success: true, data: 1 });
    expect(Object.keys(result)).toEqual(['success', 'data']);
  });
});
