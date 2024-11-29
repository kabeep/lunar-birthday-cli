import merge from 'lodash.merge';
import { osLocaleSync } from 'os-locale';
import enUS from './en-US';
import jaJP from './ja-JP';
import koKR from './ko-KR';
import viVN from './vi-VN';
import zhCN from './zh-CN';
import zhTW from './zh-TW';

const getZhLocale = (code: string) => {
    switch (code) {
        case 'zh-CN': {
            return zhCN;
        }

        case 'zh-TW':
        case 'zh-HK': {
            return merge(zhCN, zhTW);
        }

        default: {
            return zhCN;
        }
    }
};

function getLocale() {
    const localeCode = osLocaleSync();
    const localeAbbr = localeCode.split('-')[0];

    switch (localeAbbr) {
        case 'ja': {
            return jaJP;
        }

        case 'ko': {
            return koKR;
        }

        case 'vi': {
            return viVN;
        }

        case 'zh': {
            return getZhLocale(localeCode);
        }

        default: {
            return enUS;
        }
    }
}

const locale = merge<typeof enUS, ReturnType<typeof getLocale>>(enUS, getLocale());

export default locale;
