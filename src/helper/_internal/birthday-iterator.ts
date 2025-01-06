import { getLeapMonth, type LunarDate } from '@kabeep/lunar-date-fns';
import toOffsetSolar from './to-offset-solar';

function birthdayIterator(value: LunarDate, startYear: number, length: number) {
    const result: Date[] = [];

    let year = startYear;
    let index = length;
    while (index-- && year++) {
        const isLeapMonth = value.isLeapMonth && getLeapMonth(year) === value.month;
        const current = { ...value, year, isLeapMonth };
        const date = toOffsetSolar(current);
        if (date === -1) break;

        result.push(date);
    }

    return result;
}

export default birthdayIterator;
