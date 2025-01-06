import { getLeapMonth, type LunarDate, toSolar } from '@kabeep/lunar-date-fns';

function birthdayIterator(value: LunarDate, startYear: number, length: number) {
    const result: Date[] = [];

    let year = startYear;
    let index = length;
    while (index-- && year++) {
        const isLeapMonth = value.isLeapMonth && getLeapMonth(year) === value.month;
        const current = { ...value, year, isLeapMonth };
        const date = toSolar(current);
        if (date === -1) {
            const flexibleDate = toSolar({ ...current, day: value.day - 1 });
            if (flexibleDate === -1) break;

            result.push(flexibleDate);
            continue;
        }

        result.push(date);
    }

    return result;
}

export default birthdayIterator;
