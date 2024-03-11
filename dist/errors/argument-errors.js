"use strict";
/**
 * Specific Error classes to throw when validating function parameters in pre-conditions checks.
 * There is no logic in these classes, they should be used to make debugging and error output clearer
 * by specifying the particular issue that is failing validation of a parameter.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentRegExpError = exports.ArgumentUndefinedError = exports.ArgumentNullError = exports.ArgumentOutOfRangeError = exports.ArgumentError = void 0;
/**
 * Indicates that there was an error with the named parameter.
 */
class ArgumentError extends Error {
    constructor(parameterName = '', msg = '') {
        super(`${parameterName === '' ? '' : `[${parameterName}] `}${msg}`);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'ArgumentError';
        this.parameterName = parameterName;
    }
}
exports.ArgumentError = ArgumentError;
/**
 * Indicates that the named parameter was provided with a value that is
 * outside the allowed range of values for the parameter.
 */
class ArgumentOutOfRangeError extends RangeError {
    constructor(parameterName = '', msg = 'Value provided was out of the range of allowed values.', value) {
        super(`${parameterName === '' ? '' : `[${parameterName}] `}${msg}`);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'ArgumentOutOfRangeError';
        this.value = value;
        this.parameterName = parameterName;
    }
}
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
/**
 * Indicates that the named parameter was provided with a null value and
 * that null is not an allowed value for this parameter.
 */
class ArgumentNullError extends ArgumentOutOfRangeError {
    constructor(parameterName = '', msg = 'Argument cannot be null.') {
        super(msg, parameterName, null);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'ArgumentNullError';
    }
}
exports.ArgumentNullError = ArgumentNullError;
/**
 * Indicates that the named parameter was provided with an undefined value and
 * that this parameter cannot be undefined.
 */
class ArgumentUndefinedError extends ArgumentOutOfRangeError {
    constructor(parameterName = '', msg = 'Argument cannot be undefined.') {
        super(msg, parameterName, undefined);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'ArgumentUndefinedError';
    }
}
exports.ArgumentUndefinedError = ArgumentUndefinedError;
/**
 * Indicates that the named parameter was provided with a value that does
 * not match the required RegExp pattern.
 */
class ArgumentRegExpError extends ArgumentOutOfRangeError {
    constructor(parameterName = '', msg = 'Argument does not match the required pattern.', value, pattern) {
        super(msg, parameterName, value);
        Error.captureStackTrace(this, this.constructor);
        this.name = 'ArgumentUndefinedError';
        this.pattern = pattern;
    }
}
exports.ArgumentRegExpError = ArgumentRegExpError;
//# sourceMappingURL=argument-errors.js.map