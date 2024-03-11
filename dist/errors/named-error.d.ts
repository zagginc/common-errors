/**
 * Generic Error class that allows you to specify the `name` when creating it as well as pass along contextual details.
 * Generally used by creating classes with specific names that extend this class.
 *
 * !! This should be treated as an ABSTRACT class. Use a subclass...
 */
export declare class NamedError<TDetails = any> extends Error implements Error {
    static throw<T extends NamedError>(errorType: new (message: string, ...args: any[]) => T, message: string, ...args: any[]): never;
    /**
     * Typically, the name of the class for this error.
     */
    readonly name: string;
    /**
     * Brief description of the cause of the error
     */
    readonly message: string;
    /**
    * Context-specific details that should be included in logging
    * or could be used by error handlers to understand more about
    * the error condition
    */
    readonly details?: Readonly<TDetails>;
    constructor(name: string, message: string, details?: Readonly<TDetails>);
}
//# sourceMappingURL=named-error.d.ts.map