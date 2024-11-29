// Handle errors like Go Language
function go<T, V extends any[] = any[], U extends Error = Error>(
    function_: (...arguments_: V) => T,
    ...arguments_: V
): [U, undefined] | [undefined, T] {
    try {
        return [undefined, function_(...arguments_)] as [undefined, T];
    } catch (error: unknown) {
        return [error, undefined] as [U, undefined];
    }
}

export default go;
