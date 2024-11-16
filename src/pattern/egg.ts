import type { LunarDate } from '@kabeep/lunar-date-fns';
import { i18n } from '../shared';
import { serialization } from '../utils';

function egg(lunar: LunarDate) {
    const highlight = (text: string) => `\u001B[34m${text}\u001B[39m`;
    const symbol = lunar.isLeapMonth ? highlight(`(${i18n('CMD_LABEL_LEAP')})`) : '';

    return `${serialization(lunar)}${symbol}`;
}

export default egg;
