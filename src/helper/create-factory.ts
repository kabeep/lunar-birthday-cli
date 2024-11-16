import type { LunarDate } from '@kabeep/lunar-date-fns';
import { century, decade, egg, now } from '../pattern';
import { compose } from '../utils';

export type Mode = 'e' | 'n' | 'd' | 'c';

function createFactory(mode: Mode) {
    return (lunar: LunarDate, date: Date) => {
        switch (mode) {
            case 'c': {
                return compose(century(lunar, date.getFullYear()));
            }

            case 'd': {
                return compose(decade(lunar));
            }

            case 'n': {
                return now(lunar);
            }

            case 'e': {
                return egg(lunar);
            }
        }
    };
}

export default createFactory;
