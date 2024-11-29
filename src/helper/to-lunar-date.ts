import { isValidSolar, toLunar } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';

function toLunarDate(value: Date) {
    ensure(isValidSolar(value), 'UNMEANING');

    const lunarDate = toLunar(value);
    ensure(lunarDate !== -1);

    return lunarDate;
}

export default toLunarDate;
