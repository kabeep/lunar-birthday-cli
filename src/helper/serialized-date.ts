import { isValidDate } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';
import paddedDate from './_internal/padded-date';

function serializedDate(value: Date, pattern = 'YYYY-MM-DD') {
    ensure(isValidDate(value));

    const tokens: Record<string, string> = {
        /* eslint-disable @typescript-eslint/naming-convention */
        YYYY: value.getFullYear().toString(),
        MM: paddedDate(value.getMonth() + 1),
        DD: paddedDate(value.getDate()),
        /* eslint-enable @typescript-eslint/naming-convention */
    };

    return pattern.replaceAll(/YYYY|MM|DD/g, (match) => tokens[match]);
}

export default serializedDate;
