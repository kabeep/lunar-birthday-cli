import ensure from './_internal/ensure';

function normalizeInput(value: Array<string | number>) {
    ensure(value.length, 'MISSING');

    if (value.every((text) => /^\d{1,4}$/.test(text.toString()))) {
        return value.join('-');
    }

    return value.join('');
}

export default normalizeInput;
