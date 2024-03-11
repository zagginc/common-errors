"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwError = void 0;
/**
 * Used to throw an error during an assignment operation.
 * This is useful to shorten `undefined` checks and to
 *
 * Examples:
 * ```
 * const {
 *   THING = throwError(ConfigurationError, 'THING is not defined'),
 * } = process.env;
 *
 * const things: Thing[] = [...];
 * const found: Thing = things?.find(t => t.name === 'a-name')
 *   ?? throwError(ResourceNotFound, 'unable to find a Thing named a-name');
 * ```
 *
 * @param  {new(message:string, ...args: any[])} errorType
 * @param  {string} message
 * @param  {any[]} args
 * @returns never
 */
function throwError(errorType, message, ...args) {
    const e = new errorType(message, ...args);
    // Maintains proper stack trace for where throwError was called by
    // removing the call to throwError from the trace
    if (Error.captureStackTrace) {
        Error.captureStackTrace(e, throwError);
    }
    throw e;
}
exports.throwError = throwError;
//# sourceMappingURL=utils.js.map