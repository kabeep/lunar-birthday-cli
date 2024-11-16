import { type LunarDate, toSolar } from '@kabeep/lunar-date-fns';
import { i18n } from '../shared';
import { serialization } from '../utils';

function now(lunar: LunarDate) {
    const year = new Date().getFullYear();
    const date = toSolar({ ...lunar, year, isLeapMonth: false });
    if (date === -1) return i18n('CMD_ERR_UNKNOWN');

    return serialization(date);
}

export default now;
