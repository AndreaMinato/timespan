const msecPerSecond = 1000;
const msecPerMinute = 1000 * 60;
const msecPerHour = 1000 * 60 * 60;
const msecPerDay = 1000 * 60 * 60 * 24;


export class TimeSpan {
    _milliseconds: number = 0;
    _seconds: number = 0;
    _minutes: number = 0;
    _hours: number = 0;
    _days: number = 0;

    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number) {
        this._days = days;
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
        this._milliseconds = milliseconds;
    }

    static fromSeconds(seconds: number) {
        return new TimeSpan(0, 0, 0, seconds, 0);
    }
    static fromMinutes(minutes: number) {
        return new TimeSpan(0, 0, minutes, 0, 0);
    }
    static fromHours(hours: number) {
        return new TimeSpan(0, hours, 0, 0, 0);
    }
    static fromDays(days: number) {
        return new TimeSpan(days, 0, 0, 0, 0);
    }

    add(timespan: TimeSpan) {
        // return new TimeSpan(this.milliseconds + timespan.milliseconds)
    }
    subtract(timespan: TimeSpan) {
        // return new TimeSpan(this.milliseconds - timespan.milliseconds)
    }
    duration() {
        // return new TimeSpan(Math.abs(this.milliseconds))
    }

    addMilliseconds(milliseconds: number) {
        this._milliseconds += milliseconds
        return this;
    }
    subtractMilliseconds(milliseconds: number) {
        this._milliseconds -= milliseconds
        return this;
    }

    addSeconds(seconds: number) {
        this._seconds += seconds
        return this;
    }
    subtractSeconds(seconds: number) {
        this._seconds -= seconds
        return this;
    }

    addMinutes(minutes: number) {
        this._minutes += minutes
        return this;
    }
    subtractMinutes(minutes: number) {
        this._minutes -= minutes
        return this;
    }

    addHours(hours: number) {
        this._hours += hours
        return this;
    }
    subtractHours(hours: number) {
        this._hours -= hours
        return this;
    }

    addDays(days: number) {
        this._days += days
        return this;
    }
    subtractDays(days: number) {
        this._days -= days
        return this;
    }


    get milliseconds() {
        return this._milliseconds;
    }
    get seconds() {
        return this._seconds;
    }
    get minutes() {
        return this._minutes;
    }
    get hours() {
        return this._hours;
    }
    get days() {
        return this._days;
    }

    get totalMilliseconds() {
        const milliseconds = this._milliseconds;
        const seconds_ms = this._milliseconds;
        return Math.floor(this._milliseconds);
    }
    get totalSeconds() {
        return Math.floor(this._milliseconds / msecPerSecond);
    }
    get totalMinutes() {
        return Math.floor(this._milliseconds / msecPerMinute);
    }
    get totalHours() {
        return Math.floor(this._milliseconds / msecPerHour);
    }
    get totalDays() {
        return Math.floor(this._milliseconds / msecPerDay);
    }

    equals(compare: TimeSpan) {
        return compare.milliseconds === this._milliseconds;
    }
    lesser(compare: TimeSpan) {
        return this._milliseconds < compare.milliseconds;
    }
    lesserEqual(compare: TimeSpan) {
        return this._milliseconds <= compare.milliseconds;
    }
    greater(compare: TimeSpan) {
        return this._milliseconds > compare.milliseconds;
    }
    greaterEqual(compare: TimeSpan) {
        return this._milliseconds >= compare.milliseconds;
    }

}

TimeSpan.prototype.toString = function () {
    const formatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })
    const days = Math.floor(this.milliseconds / msecPerDay)
    let remaining = this.milliseconds % msecPerDay
    const hours = Math.floor(remaining / msecPerHour)
    remaining = remaining % msecPerHour
    const minutes = Math.floor(remaining / msecPerMinute)
    remaining = remaining % msecPerMinute
    const seconds = Math.floor(remaining / msecPerSecond)
    remaining = remaining % msecPerSecond
    const milliseconds = remaining
    return `${days}.${formatter.format(hours)}:${formatter.format(minutes)}:${formatter.format(seconds)}.${milliseconds}`;
}
