import { SYMBOLS } from './constants';
import {
    getCenturyDates,
    getDecadeDates,
    getEarthlyBranch,
    getHeavenlyStem,
    getNowDate,
    getStateSymbol,
    getZodiacAnimal,
    getZodiacYearState,
    normalizeInput,
    serializedDate,
    serializedLunarDate,
    toDate,
    toLunarDate,
} from './helper';
import isUnicodeSupported from './helper/is-unicode-supported';
import i18n from './i18n';
import type { Mode } from './types';

function birthday(value: Array<string | number>, mode: Mode) {
    const input = normalizeInput(value);
    const date = toDate(input);
    const lunarDate = toLunarDate(date);

    const { isLeapMonth } = lunarDate;
    const isDecade = mode === 'd' || mode === 'decade';
    const symbol = isLeapMonth ? ` \u001B[34m(${i18n('CMD_LABEL_LEAP_MONTH')})\u001B[39m` : '';

    const heading = (text: string) => `\u001B[33m${text}\u001B[39m `;

    const yearLabel = i18n('CMD_LABEL_YEAR');

    const original = serializedDate(date);
    const birthdayContent = `${heading(i18n('CMD_LABEL_BIRTHDAY'))}${original}`;

    const egg = `${serializedLunarDate(lunarDate)}${symbol}`;
    const eggStem = i18n(`CMD_LABEL_HEAVENLY_STEM_${getHeavenlyStem(lunarDate.year).toUpperCase()}`);
    const eggBranch = i18n(`CMD_LABEL_EARTHLY_BRANCH_${getEarthlyBranch(lunarDate.year).toUpperCase()}`);
    const lunarContent = `${heading(i18n('CMD_USAGE_EG_EGG'))}${eggStem + eggBranch + yearLabel} ${egg}`;

    const nowDate = getNowDate(lunarDate);
    const now = serializedDate(nowDate);
    const nowLunarDate = toLunarDate(nowDate);
    const nowStem = i18n(`CMD_LABEL_HEAVENLY_STEM_${getHeavenlyStem(nowLunarDate.year).toUpperCase()}`);
    const nowBranch = i18n(`CMD_LABEL_EARTHLY_BRANCH_${getEarthlyBranch(nowLunarDate.year).toUpperCase()}`);
    const nowBirthdayContent = `${heading(i18n('CMD_USAGE_EG_NOW'))}${nowStem + nowBranch + yearLabel} ${now}`;

    const isZodiacYear = getZodiacYearState(lunarDate.year, nowLunarDate.year);
    const zodiacYearContent = `${heading(i18n('CMD_LABEL_ZODIAC_YEAR'))}${getStateSymbol(isZodiacYear)}`;

    const animal = getZodiacAnimal(date).toUpperCase();
    const emoji = isUnicodeSupported(true) ? ` ${SYMBOLS[animal as keyof typeof SYMBOLS]}` : '';
    const zodiac = i18n(`CMD_LABEL_ANIMAL_${animal.toUpperCase()}`) + emoji;
    const zodiacContent = `${heading(i18n('CMD_LABEL_ZODIAC'))}${zodiac}`;

    const age = nowLunarDate.year - lunarDate.year;
    const ageContent = `${heading(i18n('CMD_LABEL_AGE'))}${age}`;

    const extra = isDecade ? getDecadeDates(lunarDate) : getCenturyDates(lunarDate, date.getFullYear());
    const extraContent = `${heading(i18n(isDecade ? 'CMD_USAGE_EG_DECADE' : 'CMD_USAGE_EG_CENTURY'))}\n${extra}`;

    console.log(ageContent, '\t', zodiacContent, '\t', birthdayContent, '\t', zodiacYearContent);
    console.log(lunarContent);
    console.log(nowBirthdayContent);
    console.log(extraContent);
}

export default birthday;
