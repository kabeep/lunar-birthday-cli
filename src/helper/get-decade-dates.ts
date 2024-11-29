import { type LunarDate } from '@kabeep/lunar-date-fns';
import birthdayIterator from './_internal/birthday-iterator';
import composeDates from './_internal/compose-dates';
import serializedDate from './serialized-date';

function getDecadeDates(value: LunarDate) {
    const year = new Date().getFullYear();
    const result = birthdayIterator(value, year, 10).map((item) => serializedDate(item));

    return composeDates(result);
}

export default getDecadeDates;
