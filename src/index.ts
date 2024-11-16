import { createFactory, getLunar, type Mode, printHeading } from './helper';
import { normalize } from './utils';

export { i18n } from './shared';

export interface Options {
    _: Array<string | number>;
    mode: Mode;
    $0: string;
}

function main({ _, mode }: Options) {
    const pipeline = createFactory(mode);

    const input = normalize(_);
    if (!input) return;

    const date = new Date(input);
    const lunar = getLunar(date);
    if (!lunar) return;

    const highlight = (text: string) => `\u001B[33m${text}\u001B[39m`;
    const heading = highlight(printHeading(mode));
    console.log(`${heading}${pipeline(lunar, date)}`);
}

export default main;
