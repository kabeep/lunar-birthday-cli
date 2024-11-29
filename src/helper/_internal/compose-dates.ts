import ensure from './ensure';

function composeDates(value: string | string[]) {
    if (typeof value === 'string') value = [value];

    const { length } = value;
    const separator = Array.from({ length: 83 }).join('-');

    let text = '';
    let decade = '';
    let cursor = 0;

    for (let index = 0; index < length; index++) {
        const item = value[index];
        const year = /^\d{4}/.exec(item)?.[0];
        ensure(year);

        const next = year.replace(/\d$/, '0');
        const isDiff = next !== decade;

        if (isDiff) {
            text += cursor > 0 ? `\n${separator}\n` : `${separator}\n`;
            text += `\u001B[34m${next}\u001B[39m\t`;
            decade = next;
            cursor = 0;
        }

        if (++cursor % 5) {
            text += (!isDiff && cursor === 1 ? '\t' : '') + item + '\t';
        } else {
            text += index === length - 1 ? item : `${item}\n`;
            cursor = 0;
        }
    }

    return `${text}\n${separator}`;
}

export default composeDates;
