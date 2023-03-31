import { describe, it, expect } from 'vitest';
import { shouldIncrementOrResetStreakCount } from '../src/lib';

describe('shouldIncrementOrResetStreakCount', () => {
  it('should return none if same day', () => {
    const input = new Date(
      'Tue Dec 27 2022 00:00:00 GMT+0530 (India Standard Time)'
    );
    const output = shouldIncrementOrResetStreakCount(input, '12/27/2022');
    const expected = 'none';
    expect(output).toBe(expected);
  });
});
