/// <reference types="node" />
import { CreateTxOptions } from '@terra-money/feather.js';
/** User denied the request */
export declare class UserDenied extends Error {
    constructor();
    toString: () => string;
}
/** the user did not complete the action during a specific time */
export declare class Timeout extends Error {
    constructor(message: string);
    toString: () => string;
}
/** failed on signBytes() */
export declare class SignBytesFailed extends Error {
    readonly bytes: Buffer;
    constructor(bytes: Buffer, message: string);
    toString: () => string;
}
/** Failed to create tx (did not make a txhash) */
export declare class CreateTxFailed extends Error {
    readonly tx: CreateTxOptions;
    constructor(tx: CreateTxOptions, message: string);
    toString: () => string;
}
/** Failed process the tx (maked a txhash) */
export declare class TxFailed extends Error {
    readonly tx: CreateTxOptions;
    readonly txhash: string | undefined;
    readonly raw_message: any;
    constructor(tx: CreateTxOptions, txhash: string | undefined, message: string, raw_message: any);
    toString: () => string;
}
/** Unknown error */
export declare class TxUnspecifiedError extends Error {
    readonly tx: CreateTxOptions;
    constructor(tx: CreateTxOptions, message: string);
    toString: () => string;
}
export declare class SignBytesUnspecifiedError extends Error {
    readonly bytes: Buffer;
    constructor(bytes: Buffer, message: string);
    toString: () => string;
}
