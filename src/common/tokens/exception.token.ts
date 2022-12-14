export enum ExceptionTypeEnum {
    AUTHENTICATION = 'AUTHENTICATION',
    AUTHORIZATION = 'AUTHORIZATION',
    NOT_FOUND = 'NOT_FOUND',
    TOO_MANY_REQUESTS = 'TOO_MANY_REQUESTS',
    CLIENT = 'CLIENT',
    SERVER = 'SERVER'
}

export enum ErrorCodeEnum {
    RECEIPT_NOT_FOUND = 50712,
    RECEIPT_ID_IS_MISSING = 50713,
    RECEIPT_PARAMETER_IS_MISSING = 50729,
    RECEIPT_ALREADY_EXISTS = 50721,
    KEY_IS_INCORRECT = 50783,
    THROTTLER = 50704
}