import isUnicodeSupported from './is-unicode-supported';

const green = (text: string) => `\u001B[32m${text}\u001B[39m`;
const red = (text: string) => `\u001B[31m${text}\u001B[39m`;

const _isUnicodeSupported = isUnicodeSupported();
const success = green(_isUnicodeSupported ? '✔' : '√');
const error = red(_isUnicodeSupported ? '✖️' : '×');

function getStateSymbol(state?: boolean) {
    return state ? success : error;
}

export default getStateSymbol;
