export default class Timer {
    static MS_SECOND: number;
    static MS_MINUTE: number;
    static MS_HOURE: number;
    static MS_DAY: number;
    _value: Date;
    constructor(date?: Date | Number | string | Timer | null);
    getTime(): Number;
    getFirstDayOfMonth(): Timer;
    getLastDayOfMonth(): Timer;
    format(fmt: string): string;
    setValue(value: Date): void;
    getValue(): Date;
}
