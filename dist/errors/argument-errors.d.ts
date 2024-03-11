/**
 * Specific Error classes to throw when validating function parameters in pre-conditions checks.
 * There is no logic in these classes, they should be used to make debugging and error output clearer
 * by specifying the particular issue that is failing validation of a parameter.
 */
/**
 * Indicates that there was an error with the named parameter.
 */
export declare class ArgumentError extends Error {
    parameterName: string;
    constructor(parameterName?: string, msg?: string);
}
/**
 * Indicates that the named parameter was provided with a value that is
 * outside the allowed range of values for the parameter.
 */
export declare class ArgumentOutOfRangeError extends RangeError {
    parameterName: string;
    value: any;
    constructor(parameterName?: string, msg?: string, value?: any);
}
/**
 * Indicates that the named parameter was provided with a null value and
 * that null is not an allowed value for this parameter.
 */
export declare class ArgumentNullError extends ArgumentOutOfRangeError {
    constructor(parameterName?: string, msg?: string);
}
/**
 * Indicates that the named parameter was provided with an undefined value and
 * that this parameter cannot be undefined.
 */
export declare class ArgumentUndefinedError extends ArgumentOutOfRangeError {
    constructor(parameterName?: string, msg?: string);
}
/**
 * Indicates that the named parameter was provided with a value that does
 * not match the required RegExp pattern.
 */
export declare class ArgumentRegExpError extends ArgumentOutOfRangeError {
    pattern?: RegExp;
    constructor(parameterName: string | undefined, msg: string | undefined, value: string, pattern: RegExp);
}
//# sourceMappingURL=argument-errors.d.ts.map