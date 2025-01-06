import { type LunarDate, toSolar } from '@kabeep/lunar-date-fns';

function toOffsetSolar(lunar: LunarDate) {
    const solar = toSolar(lunar);
    // If there is no lunar 30 this year, according to custom, it should be shifted forward by one day.
    if (solar === -1) return toSolar({ ...lunar, day: lunar.day - 1 });

    return solar;
}

export default toOffsetSolar;
