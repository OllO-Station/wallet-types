/// <reference types="node" />
import { AccAddress, CreateTxOptions } from '@terra-money/feather.js';
import { Connection, ConnectType, Installation, NetworkInfo, SignBytesResult, SignResult, TxResult, WalletInfo, WalletStatus } from './types';
export interface ConnectedWallet {
    network: NetworkInfo;
    addresses: Record<string, AccAddress>;
    /** terraAddress is same as walletAddress */
    design?: string;
    post: (tx: CreateTxOptions) => Promise<TxResult>;
    sign: (tx: CreateTxOptions) => Promise<SignResult>;
    signBytes: (bytes: Buffer) => Promise<SignBytesResult>;
    availablePost: boolean;
    availableSign: boolean;
    availableSignBytes: boolean;
    connectType: ConnectType;
    connection: Connection;
}
interface CreateConnectedWalletParams {
    status: WalletStatus;
    network: NetworkInfo;
    wallets: WalletInfo[];
    connection: Connection | undefined;
    post: (tx: CreateTxOptions, terraAddress?: string) => Promise<TxResult>;
    sign: (tx: CreateTxOptions, terraAddress?: string) => Promise<SignResult>;
    signBytes: (bytes: Buffer, terraAddress?: string) => Promise<SignBytesResult>;
    supportFeatures: Set<'post' | 'sign' | 'sign-bytes' | 'cw20-token' | 'network'>;
}
export declare function createConnectedWallet({ connection, post, sign, signBytes, supportFeatures, wallets, status, network, }: CreateConnectedWalletParams): ConnectedWallet | undefined;
interface CreateInstallableWallets {
    status: WalletStatus;
    installations: Installation[];
}
export declare function createInstallableWallets({ status, installations, }: CreateInstallableWallets): Installation[] | undefined;
export {};
