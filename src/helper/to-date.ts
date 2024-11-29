import { isValidDate } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';

function toDate(value: string) {
    const date = new Date(value);
    ensure(isValidDate(date), 'INVALID');

    return date;
}

export default toDate;
