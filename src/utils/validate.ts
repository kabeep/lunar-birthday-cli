import { isValidDate, isValidSolar } from '@kabeep/lunar-date-fns';
import { i18n } from '../shared';

function validate(value: Date) {
    if (!isValidDate(value)) {
        console.log(i18n('CMD_TIP_INVALID'));
        return false;
    }

    if (!isValidSolar(value)) {
        console.log(i18n('CMD_TIP_UNMEANING'));
        return false;
    }

    return true;
}

export default validate;
