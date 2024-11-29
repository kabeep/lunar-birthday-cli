function ensure(condition: any, message?: string | (() => string)): asserts condition {
    if (condition) {
        return;
    }

    const providedMessage = typeof message === 'function' ? message() : message;
    throw new Error(providedMessage ?? 'UNKNOWN');
}

export default ensure;
