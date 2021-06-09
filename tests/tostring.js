import test from 'ava';
import { TimeSpan } from '../dist/main';

test('1 day 2 hours, 20 minutes, 15 seconds and 300 ms', (t) => {
    let timespan = TimeSpan.fromDays(1)
    timespan.addHours(2)
    timespan.addMinutes(20)
    timespan.addSeconds(15)
    timespan.addMilliseconds(300)
    t.is(timespan.toString(), '1.02:20:15.300');
});

test('0 day 0 hours, 1 minutes, 0 seconds and 0 ms', (t) => {
    let timespan = TimeSpan.fromMinutes(1)
    t.is(timespan.toString(), '0.00:01:00.000');
});
