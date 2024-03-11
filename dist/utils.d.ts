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
export declare function throwError<T extends Error = Error>(errorType: new (message: string, ...args: any[]) => T, message: string, ...args: any[]): never;
//# sourceMappingURL=utils.d.ts.map