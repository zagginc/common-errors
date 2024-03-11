"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedError = void 0;
const utils_1 = require("../utils");
/**
 * Generic Error class that allows you to specify the `name` when creating it as well as pass along contextual details.
 * Generally used by creating classes with specific names that extend this class.
 *
 * !! This should be treated as an ABSTRACT class. Use a subclass...
 */
class NamedError extends Error {
    static throw(errorType, message, ...args) {
        try {
            (0, utils_1.throwError)(errorType, message, ...args);
        }
        catch (e) {
            // Maintains proper stack trace for where throwError was called by
            // removing the call to throwError from the trace
            if (Error.captureStackTrace) {
                Error.captureStackTrace(e, NamedError.throw);
            }
            throw e;
        }
    }
    constructor(name, message, details) {
        super(message);
        // Maintains proper stack trace for where our error was thrown
        // by removing the call to this constructor from the stack
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, NamedError);
        }
        // runtime checks because this constructor does not match the Error constructor
        if (typeof name === 'string' && message === undefined) {
            message = name;
            name = 'NamedError';
        }
        this.name = name;
        this.message = message;
        this.details = details;
    }
}
exports.NamedError = NamedError;
//# sourceMappingURL=named-error.js.map