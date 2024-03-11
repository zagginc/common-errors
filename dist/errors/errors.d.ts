import { NamedError } from './named-error';
import type { AuthenticationErrorCode, IHttpErrorDetails } from '..';
import type { StatusCodes } from 'http-status-codes';
/**
 * Thrown if there is a failure during an Authentication process.
 *
 * @see {@link AuthenticationError.code} as the indication of the reason for the failure
 * @see {@link AuthenticationErrorCode} for the types of possible failures
 */
export declare class AuthenticationError extends NamedError {
    static readonly ERROR_NAME: string;
    readonly code: AuthenticationErrorCode;
    constructor(message: string, code: AuthenticationErrorCode, details?: any);
}
/**
 * Thrown if access it not permitted (HTTP 403).
 */
export declare class AuthorizationError extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
/**
 * Use Case: When data validation fails.
 * Typically this is a terminal condition.
 */
export declare class InvalidDataFormatError extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
/**
 * Thrown when an event happens that is out of order from the expected flow of events,
 * or where the operation requested is not valid for the code that is processing it.
 *
 */
export declare class InvalidOperationError extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
/**
 * Thrown when the system is not in a valid state to process the action requested.
 */
export declare class InvalidStateError extends NamedError {
    static readonly ERROR_NAME: string;
    /**
     * Indicates if this error should be treated as a terminating error
     * for the given operation or data processing.
     */
    readonly terminal: boolean;
    constructor(message: string, details?: any);
}
/**
 * Use Case: thrown where there is code yet to be written and the execution path should not
 * yet be getting to this location in the code.
 */
export declare class NotImplementedError extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
/**
 * Use Case: typically used to indicate that there is missing configuration
 * properties (e.g. process.env.SOMETHING is undefined) or where a configuration
 * property contains an invalid value.
 */
export declare class ConfigurationError extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
export declare class ResourceNotFound extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
export declare class AccountNotFound extends NamedError {
    static readonly ERROR_NAME: string;
    constructor(message: string, details?: any);
}
export declare class HttpError<TResponseType = any> extends NamedError<IHttpErrorDetails> {
    static readonly ERROR_NAME: string;
    readonly code: StatusCodes;
    readonly response?: TResponseType;
    readonly details?: IHttpErrorDetails;
    constructor(code: StatusCodes, message: string, details?: IHttpErrorDetails);
}
//# sourceMappingURL=errors.d.ts.map