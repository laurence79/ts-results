import { fail } from './fail';
import { Result } from './types';

describe('fail', () => {
  it('returns the expected data', () => {
    const fn = (): Result<void, 'NOT_FOUND'> => {
      return fail('NOT_FOUND');
    };

    const result = fn();

    expect(result).toEqual({ success: false, reason: 'NOT_FOUND' });
    expect(Object.keys(result)).toEqual(['success', 'reason']);
  });
});
