import { getLeapMonth, type LunarDate, toSolar } from '@kabeep/lunar-date-fns';
import { serialization } from '../utils';

function century(lunar: LunarDate, year: number) {
    const result: string[] = [];

    let index = 100;
    while (index--) {
        const isLeapMonth = getLeapMonth(year) === lunar.month;
        const date = toSolar({ ...lunar, year: year++, isLeapMonth });

        if (date === -1) return result;
        result.push(serialization(date));
    }

    return result;
}

export default century;
