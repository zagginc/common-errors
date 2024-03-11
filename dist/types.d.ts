/**
 * Indicates the reason for an Authentication failure.
 */
export declare enum AuthenticationErrorCode {
    UNKNOWN_OR_OTHER = 0,
    AUTHENTICATION_HEADER_MISSING = 1,
    AUTHENTICATION_HEADER_BAD_FORMAT = 2,
    TOKEN_NOT_FOUND = 3,
    INVALID_TOKEN = 4
}
export interface IHttpErrorDetails<TResponseType = any> {
    response?: TResponseType;
    source?: string;
    [key: string]: any;
}
//# sourceMappingURL=types.d.ts.map