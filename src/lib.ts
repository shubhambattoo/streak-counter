import { Streak } from './';
/** Used when saving the streak to `localStorage` */
export const STREAK_KEY = 'streak';

// Source: https://stackoverflow.com/a/65225615/3015595
const diff = (from: string, to: string) =>
  Math.floor((new Date(from).getTime() - new Date(to).getTime()) / 86400000);

export function shouldIncrementOrResetStreakCount(
  currentDate: Date,
  lastLoginDate: string
): 'increment' | 'none' | 'reset' {
  const difference = diff(currentDate.toDateString(), lastLoginDate);

  if (difference === 1) {
    return 'increment';
  }

  if (difference === 0) {
    return 'none';
  }
  // Otherwise they logged in after a day, which would
  // break the streak
  return 'reset';
}

export function formattedDate(date: Date): string {
  return date.toLocaleDateString('en-US');
}

export function buildStreak(
  date: Date,
  overrideDefaults?: Partial<Streak>
): Streak {
  const defaultStreak = {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  };

  return {
    ...defaultStreak,
    ...overrideDefaults,
  };
}
