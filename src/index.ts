import birthday from './birthday';
import { go } from './helper';
import i18n from './i18n';
import type { Mode } from './types';

export interface Options {
    _: Array<string | number>;
    mode: Mode;
    $0: string;
}

function main({ _, mode }: Options) {
    const [error] = go(birthday, _, mode);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    error && console.log(i18n(`CMD_ERR_${error?.message ?? 'UNKNOWN'}`));
}

export default main;

export { default as i18n } from './i18n';
