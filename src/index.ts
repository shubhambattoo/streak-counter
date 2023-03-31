import {
  buildStreak,
  formattedDate,
  shouldIncrementOrResetStreakCount,
  STREAK_KEY,
} from './lib';

export interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function streakCounter(_localStorage: Storage, date: Date): Streak {
  const streakInLocalStorage = _localStorage.getItem(STREAK_KEY);
  if (streakInLocalStorage) {
    try {
      const streak = JSON.parse(streakInLocalStorage || '') as Streak;
      const STATE = shouldIncrementOrResetStreakCount(
        date,
        streak.lastLoginDate
      );

      let updatedStreak = <Streak>{};

      switch (STATE) {
        case 'increment':
          updatedStreak = buildStreak(date, {
            currentCount: (streak.currentCount += 1),
          });

          _localStorage.setItem(STREAK_KEY, JSON.stringify(updatedStreak));

          return updatedStreak;
        case 'reset':
          updatedStreak = buildStreak(date);

          _localStorage.setItem(STREAK_KEY, JSON.stringify(updatedStreak));

          return updatedStreak;
        case 'none':
        default:
          updatedStreak = streak;
      }

      return updatedStreak;
    } catch (error) {
      console.error('Failed to load streak from local storage');
    }
  }
  const streak = buildStreak(date);

  _localStorage.setItem(STREAK_KEY, JSON.stringify(streak));

  return streak;
}
