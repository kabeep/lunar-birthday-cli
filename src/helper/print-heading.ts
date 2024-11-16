import { i18n } from '../shared';
import type { Mode } from './create-factory';

function printHeading(mode: Mode) {
    switch (mode) {
        case 'e': {
            return i18n('CMD_USAGE_EG_EGG') + ': ';
        }

        case 'n': {
            return i18n('CMD_USAGE_EG_NOW') + ': ';
        }

        case 'd': {
            return i18n('CMD_USAGE_EG_DECADE') + '\n';
        }

        case 'c': {
            return i18n('CMD_USAGE_EG_CENTURY') + '\n';
        }
    }
}

export default printHeading;
