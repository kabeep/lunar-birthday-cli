import { i18n } from '../shared';

function normalize(value: Array<string | number>) {
    if (value.length === 0) {
        console.log(i18n('CMD_TIP_MISSING'));
        return;
    }

    if (value.every((item) => /^\d{1,4}$/.test(`${item}`))) {
        return value.join('-');
    }

    return value.join('');
}

export default normalize;
