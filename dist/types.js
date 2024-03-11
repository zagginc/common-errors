"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationErrorCode = void 0;
/**
 * Indicates the reason for an Authentication failure.
 */
var AuthenticationErrorCode;
(function (AuthenticationErrorCode) {
    AuthenticationErrorCode[AuthenticationErrorCode["UNKNOWN_OR_OTHER"] = 0] = "UNKNOWN_OR_OTHER";
    AuthenticationErrorCode[AuthenticationErrorCode["AUTHENTICATION_HEADER_MISSING"] = 1] = "AUTHENTICATION_HEADER_MISSING";
    AuthenticationErrorCode[AuthenticationErrorCode["AUTHENTICATION_HEADER_BAD_FORMAT"] = 2] = "AUTHENTICATION_HEADER_BAD_FORMAT";
    AuthenticationErrorCode[AuthenticationErrorCode["TOKEN_NOT_FOUND"] = 3] = "TOKEN_NOT_FOUND";
    AuthenticationErrorCode[AuthenticationErrorCode["INVALID_TOKEN"] = 4] = "INVALID_TOKEN";
})(AuthenticationErrorCode = exports.AuthenticationErrorCode || (exports.AuthenticationErrorCode = {}));
//# sourceMappingURL=types.js.map