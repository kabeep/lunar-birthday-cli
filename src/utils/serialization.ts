import { isValidDate, isValidLunar, type LunarDate } from '@kabeep/lunar-date-fns';
import { i18n } from '../shared';

function serialization(value: Date | LunarDate | -1) {
    const pad = (value: number) => `${value}`.padStart(2, '0');

    if (isValidLunar(value)) {
        return `${value.year}-${pad(value.month)}-${pad(value.day)}`;
    }

    if (isValidDate(value)) {
        return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
    }

    return i18n('CMD_ERR_INVALID');
}

export default serialization;
