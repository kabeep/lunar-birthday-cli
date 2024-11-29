import { getLeapMonth, type LunarDate, toSolar } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';

function getNowDate(value: LunarDate): Date {
    const year = new Date().getFullYear();
    const isLeapYear = value.isLeapMonth && Boolean(getLeapMonth(year));
    const solar = toSolar({ ...value, year, isLeapMonth: isLeapYear });
    ensure(solar !== -1);
    return solar;
}

export default getNowDate;
