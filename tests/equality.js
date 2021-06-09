import test from 'ava';
import { TimeSpan } from '../dist/main';

test('1 seconds is equals to 1000 ms', (t) => {
    t.is(TimeSpan.fromSeconds(1).milliseconds, 1000);
});

test('1 minute is equals to 60 seconds', (t) => {
    t.is(TimeSpan.fromMinutes(1).milliseconds, TimeSpan.fromSeconds(60).milliseconds);
});

test('1 hour is equals to 60 minutes', (t) => {
    t.is(TimeSpan.fromHours(1).milliseconds, TimeSpan.fromMinutes(60).milliseconds);
});

test('1 day is equals to 24 hours', (t) => {
    t.is(TimeSpan.fromDays(1).milliseconds, TimeSpan.fromHours(24).milliseconds);
});
