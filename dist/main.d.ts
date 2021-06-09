export declare class TimeSpan {
    _milliseconds: number;
    constructor(milliseconds: number);
    static fromSeconds(seconds: number): TimeSpan;
    static fromMinutes(minutes: number): TimeSpan;
    static fromHours(hours: number): TimeSpan;
    static fromDays(days: number): TimeSpan;
    add(timespan: TimeSpan): TimeSpan;
    subtract(timespan: TimeSpan): TimeSpan;
    duration(): TimeSpan;
    addMilliseconds(milliseconds: number): void;
    subtractMilliseconds(milliseconds: number): void;
    addSeconds(seconds: number): void;
    subtractSeconds(seconds: number): void;
    addMinutes(minutes: number): void;
    subtractMinutes(minutes: number): void;
    addHours(hours: number): void;
    subtractHours(hours: number): void;
    addDays(days: number): void;
    subtractDays(days: number): void;
    get milliseconds(): number;
    get seconds(): number;
    get minutes(): number;
    get hours(): number;
    get days(): number;
    get totalMilliseconds(): number;
    get totalSeconds(): number;
    get totalMinutes(): number;
    get totalHours(): number;
    get totalDays(): number;
    equals(compare: TimeSpan): boolean;
    lesser(compare: TimeSpan): boolean;
    lesserEqual(compare: TimeSpan): boolean;
    greater(compare: TimeSpan): boolean;
    greaterEqual(compare: TimeSpan): boolean;
}