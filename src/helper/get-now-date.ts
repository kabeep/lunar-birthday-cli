import { getLeapMonth, type LunarDate } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';
import toOffsetSolar from './_internal/to-offset-solar';

function getNowDate(value: LunarDate): Date {
    const year = new Date().getFullYear();
    const isLeapMonth = value.isLeapMonth && getLeapMonth(year) === value.month;
    const solar = toOffsetSolar({ ...value, year, isLeapMonth });
    ensure(solar !== -1);
    return solar;
}

export default getNowDate;
