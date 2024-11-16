import { toLunar } from '@kabeep/lunar-date-fns';
import { i18n } from '../shared';
import { validate } from '../utils';

function getLunar(value: Date) {
    const isValid = validate(value);
    if (!isValid) return;

    const lunar = toLunar(value);
    if (lunar === -1) {
        i18n('CMD_ERR_UNKNOWN');
        return;
    }

    return lunar;
}

export default getLunar;
