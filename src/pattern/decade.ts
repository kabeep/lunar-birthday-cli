import { getLeapMonth, type LunarDate, toSolar } from '@kabeep/lunar-date-fns';
import { serialization } from '../utils';

function decade(lunar: LunarDate) {
    const result: string[] = [];

    let year = new Date().getFullYear();
    let index = 10;
    while (index--) {
        const isLeapMonth = getLeapMonth(year) === lunar.month;
        const date = toSolar({ ...lunar, year: year++, isLeapMonth });

        if (date === -1) return result;
        result.push(serialization(date));
    }

    return result;
}

export default decade;
