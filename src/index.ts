const msecPerSecond = 1000;
const msecPerMinute = 1000 * 60;
const msecPerHour = 1000 * 60 * 60;
const msecPerDay = 1000 * 60 * 60 * 24;


export class TimeSpan {
    _milliseconds: number = 0;

    constructor(milliseconds: number) {
        this._milliseconds = milliseconds
    }

    static fromSeconds(seconds: number) {
        return new TimeSpan(seconds * msecPerSecond);
    }
    static fromMinutes(minutes: number) {
        return new TimeSpan(minutes * msecPerMinute);
    }
    static fromHours(hours: number) {
        return new TimeSpan(hours * msecPerHour);
    }
    static fromDays(days: number) {
        return new TimeSpan(days * msecPerDay);
    }

    add(timespan: TimeSpan) {
        return new TimeSpan(this.milliseconds + timespan.milliseconds)
    }
    subtract(timespan: TimeSpan) {
        return new TimeSpan(this.milliseconds - timespan.milliseconds)
    }
    duration() {
        return new TimeSpan(Math.abs(this.milliseconds))
    }

    addMilliseconds(milliseconds: number) {
        this._milliseconds += milliseconds
    }
    subtractMilliseconds(milliseconds: number) {
        this._milliseconds -= milliseconds
    }

    addSeconds(seconds: number) {
        this._milliseconds += (seconds * msecPerSecond)
    }
    subtractSeconds(seconds: number) {
        this._milliseconds -= (seconds * msecPerSecond)
    }

    addMinutes(minutes: number) {
        this._milliseconds += (minutes * msecPerMinute)
    }
    subtractMinutes(minutes: number) {
        this._milliseconds -= (minutes * msecPerMinute)
    }

    addHours(hours: number) {
        this._milliseconds += (hours * msecPerHour)
    }
    subtractHours(hours: number) {
        this._milliseconds -= (hours * msecPerHour)
    }

    addDays(days: number) {
        this._milliseconds += (days * msecPerDay)
    }
    subtractDays(days: number) {
        this._milliseconds -= (days * msecPerDay)
    }


    get milliseconds() {
        return this._milliseconds;
    }
    get seconds() {
        return this._milliseconds / msecPerSecond;
    }
    get minutes() {
        return this._milliseconds / msecPerMinute;
    }
    get hours() {
        return this._milliseconds / msecPerHour;
    }
    get days() {
        return this._milliseconds / msecPerDay;
    }

    get totalMilliseconds() {
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
