import { type LunarDate } from '@kabeep/lunar-date-fns';
import birthdayIterator from './_internal/birthday-iterator';
import composeDates from './_internal/compose-dates';
import serializedDate from './serialized-date';

function getCenturyDates(value: LunarDate, year: number) {
    const result = birthdayIterator(value, year, 100).map((item) => serializedDate(item));

    return composeDates(result);
}

export default getCenturyDates;
