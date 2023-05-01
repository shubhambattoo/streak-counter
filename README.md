# Streak counter
> A Basic streak counter api used for tracking your streak. Written with typescript 

## Installation

```shell
npm install streak-counter
```

```shell
yarn add streak-counter
```

## Usage

```typescript
import { streakCounter } from "@shubhambatt997/streak-counter";
const today = new Date();
const streak = streakCounter(localStorage, today);
// streak returns an object:
// {
//    currentCount: 1,
//    lastLoginDate: "11/11/2021",
//    startDate: "11/11/2021",
// }
```
