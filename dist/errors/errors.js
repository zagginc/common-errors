"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = exports.AccountNotFound = exports.ResourceNotFound = exports.ConfigurationError = exports.NotImplementedError = exports.InvalidStateError = exports.InvalidOperationError = exports.InvalidDataFormatError = exports.AuthorizationError = exports.AuthenticationError = void 0;
/* eslint-disable no-magic-numbers */
const named_error_1 = require("./named-error");
/**
 * Thrown if there is a failure during an Authentication process.
 *
 * @see {@link AuthenticationError.code} as the indication of the reason for the failure
 * @see {@link AuthenticationErrorCode} for the types of possible failures
 */
class AuthenticationError extends named_error_1.NamedError {
    constructor(message, code, details) {
        super(AuthenticationError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthenticationError);
        }
        this.code = code;
    }
}
exports.AuthenticationError = AuthenticationError;
AuthenticationError.ERROR_NAME = 'AuthenticationError';
/**
 * Thrown if access it not permitted (HTTP 403).
 */
class AuthorizationError extends named_error_1.NamedError {
    constructor(message, details) {
        super(AuthorizationError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthenticationError);
        }
    }
}
exports.AuthorizationError = AuthorizationError;
AuthorizationError.ERROR_NAME = 'AuthorizationError';
/**
 * Use Case: When data validation fails.
 * Typically this is a terminal condition.
 */
class InvalidDataFormatError extends named_error_1.NamedError {
    constructor(message, details) {
        super(InvalidDataFormatError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidDataFormatError);
        }
    }
}
exports.InvalidDataFormatError = InvalidDataFormatError;
InvalidDataFormatError.ERROR_NAME = 'InvalidDataFormatError';
/**
 * Thrown when an event happens that is out of order from the expected flow of events,
 * or where the operation requested is not valid for the code that is processing it.
 *
 */
class InvalidOperationError extends named_error_1.NamedError {
    constructor(message, details) {
        super(InvalidOperationError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidOperationError);
        }
    }
}
exports.InvalidOperationError = InvalidOperationError;
InvalidOperationError.ERROR_NAME = 'InvalidOperationException';
/**
 * Thrown when the system is not in a valid state to process the action requested.
 */
class InvalidStateError extends named_error_1.NamedError {
    constructor(message, details) {
        super(InvalidStateError.ERROR_NAME, message, details);
        /**
         * Indicates if this error should be treated as a terminating error
         * for the given operation or data processing.
         */
        this.terminal = false;
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidStateError);
        }
    }
}
exports.InvalidStateError = InvalidStateError;
InvalidStateError.ERROR_NAME = 'InvalidStateError';
/**
 * Use Case: thrown where there is code yet to be written and the execution path should not
 * yet be getting to this location in the code.
 */
class NotImplementedError extends named_error_1.NamedError {
    constructor(message, details) {
        super(NotImplementedError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NotImplementedError);
        }
    }
}
exports.NotImplementedError = NotImplementedError;
NotImplementedError.ERROR_NAME = 'NotImplementedError';
/**
 * Use Case: typically used to indicate that there is missing configuration
 * properties (e.g. process.env.SOMETHING is undefined) or where a configuration
 * property contains an invalid value.
 */
class ConfigurationError extends named_error_1.NamedError {
    constructor(message, details) {
        super(ConfigurationError.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ConfigurationError);
        }
    }
}
exports.ConfigurationError = ConfigurationError;
ConfigurationError.ERROR_NAME = 'ConfigurationError';
class ResourceNotFound extends named_error_1.NamedError {
    constructor(message, details) {
        super(ResourceNotFound.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ResourceNotFound);
        }
    }
}
exports.ResourceNotFound = ResourceNotFound;
ResourceNotFound.ERROR_NAME = 'ResourceNotFound';
class AccountNotFound extends named_error_1.NamedError {
    constructor(message, details) {
        super(AccountNotFound.ERROR_NAME, message, details);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AccountNotFound);
        }
    }
}
exports.AccountNotFound = AccountNotFound;
AccountNotFound.ERROR_NAME = 'AccountNotFound';
class HttpError extends named_error_1.NamedError {
    constructor(code, message, details) {
        super(HttpError.ERROR_NAME, message, details);
        this.code = code;
        this.response = details?.response;
        this.details = details;
    }
}
exports.HttpError = HttpError;
HttpError.ERROR_NAME = 'HttpError';
//# sourceMappingURL=errors.js.map