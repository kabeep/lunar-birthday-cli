import { isValidLunar, type LunarDate } from '@kabeep/lunar-date-fns';
import ensure from './_internal/ensure';
import paddedDate from './_internal/padded-date';

function serializedLunarDate(value: LunarDate | -1, pattern = 'YYYY-MM-DD') {
    ensure(value !== -1 && isValidLunar(value));

    const tokens: Record<string, string> = {
        /* eslint-disable @typescript-eslint/naming-convention */
        YYYY: value.year.toString(),
        MM: paddedDate(value.month),
        DD: paddedDate(value.day),
        /* eslint-enable @typescript-eslint/naming-convention */
    };

    return pattern.replaceAll(/YYYY|MM|DD/g, (match) => tokens[match]);
}

export default serializedLunarDate;
