import { WalletStatus, } from './types';
export function createConnectedWallet({ connection, post, sign, signBytes, supportFeatures, wallets, status, network, }) {
    try {
        if (status === WalletStatus.WALLET_CONNECTED &&
            wallets.length > 0 &&
            // TODO: validate addresses
            //AccAddress.validate(wallets[0].terraAddress) &&
            !!connection) {
            const { addresses, connectType, design } = wallets[0];
            return {
                network,
                addresses,
                design,
                post: (tx) => {
                    return post(tx, addresses[tx.chainID]);
                },
                sign: (tx) => {
                    return sign(tx, addresses[tx.chainID]);
                },
                signBytes: (bytes) => {
                    return signBytes(bytes);
                },
                availablePost: supportFeatures.has('post'),
                availableSign: supportFeatures.has('sign'),
                availableSignBytes: supportFeatures.has('sign-bytes'),
                connectType,
                connection,
            };
        }
        else {
            return undefined;
        }
    }
    catch (_a) {
        return undefined;
    }
}
export function createInstallableWallets({ status, installations, }) {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
        return installations;
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtdHlwZXMvd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFTTCxZQUFZLEdBQ2IsTUFBTSxTQUFTLENBQUM7QUFnQ2pCLE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxFQUNwQyxVQUFVLEVBQ1YsSUFBSSxFQUNKLElBQUksRUFDSixTQUFTLEVBQ1QsZUFBZSxFQUNmLE9BQU8sRUFDUCxNQUFNLEVBQ04sT0FBTyxHQUNxQjtJQUM1QixJQUFJO1FBQ0YsSUFDRSxNQUFNLEtBQUssWUFBWSxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDbEIsMkJBQTJCO1lBQzNCLGlEQUFpRDtZQUNqRCxDQUFDLENBQUMsVUFBVSxFQUNaO1lBQ0EsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXRELE9BQU87Z0JBQ0wsT0FBTztnQkFDUCxTQUFTO2dCQUNULE1BQU07Z0JBQ04sSUFBSSxFQUFFLENBQUMsRUFBbUIsRUFBRSxFQUFFO29CQUM1QixPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUNELElBQUksRUFBRSxDQUFDLEVBQW1CLEVBQUUsRUFBRTtvQkFDNUIsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxTQUFTLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRTtvQkFDM0IsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBQ0QsYUFBYSxFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxhQUFhLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQzFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNyRCxXQUFXO2dCQUNYLFVBQVU7YUFDWCxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0tBQ0Y7SUFBQyxXQUFNO1FBQ04sT0FBTyxTQUFTLENBQUM7S0FDbEI7QUFDSCxDQUFDO0FBT0QsTUFBTSxVQUFVLHdCQUF3QixDQUFDLEVBQ3ZDLE1BQU0sRUFDTixhQUFhLEdBQ1k7SUFDekIsSUFBSSxNQUFNLEtBQUssWUFBWSxDQUFDLG9CQUFvQixFQUFFO1FBQ2hELE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY0FkZHJlc3MsIENyZWF0ZVR4T3B0aW9ucyB9IGZyb20gJ0B0ZXJyYS1tb25leS9mZWF0aGVyLmpzJztcbmltcG9ydCB7XG4gIENvbm5lY3Rpb24sXG4gIENvbm5lY3RUeXBlLFxuICBJbnN0YWxsYXRpb24sXG4gIE5ldHdvcmtJbmZvLFxuICBTaWduQnl0ZXNSZXN1bHQsXG4gIFNpZ25SZXN1bHQsXG4gIFR4UmVzdWx0LFxuICBXYWxsZXRJbmZvLFxuICBXYWxsZXRTdGF0dXMsXG59IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3RlZFdhbGxldCB7XG4gIG5ldHdvcms6IE5ldHdvcmtJbmZvO1xuICBhZGRyZXNzZXM6IFJlY29yZDxzdHJpbmcsIEFjY0FkZHJlc3M+O1xuICAvL3dhbGxldEFkZHJlc3M6IEFjY0FkZHJlc3M7XG4gIC8qKiB0ZXJyYUFkZHJlc3MgaXMgc2FtZSBhcyB3YWxsZXRBZGRyZXNzICovXG4gIC8vdGVycmFBZGRyZXNzOiBBY2NBZGRyZXNzO1xuICBkZXNpZ24/OiBzdHJpbmc7XG4gIHBvc3Q6ICh0eDogQ3JlYXRlVHhPcHRpb25zKSA9PiBQcm9taXNlPFR4UmVzdWx0PjtcbiAgc2lnbjogKHR4OiBDcmVhdGVUeE9wdGlvbnMpID0+IFByb21pc2U8U2lnblJlc3VsdD47XG4gIHNpZ25CeXRlczogKGJ5dGVzOiBCdWZmZXIpID0+IFByb21pc2U8U2lnbkJ5dGVzUmVzdWx0PjtcbiAgYXZhaWxhYmxlUG9zdDogYm9vbGVhbjtcbiAgYXZhaWxhYmxlU2lnbjogYm9vbGVhbjtcbiAgYXZhaWxhYmxlU2lnbkJ5dGVzOiBib29sZWFuO1xuICBjb25uZWN0VHlwZTogQ29ubmVjdFR5cGU7XG4gIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XG59XG5cbmludGVyZmFjZSBDcmVhdGVDb25uZWN0ZWRXYWxsZXRQYXJhbXMge1xuICBzdGF0dXM6IFdhbGxldFN0YXR1cztcbiAgbmV0d29yazogTmV0d29ya0luZm87XG4gIHdhbGxldHM6IFdhbGxldEluZm9bXTtcbiAgY29ubmVjdGlvbjogQ29ubmVjdGlvbiB8IHVuZGVmaW5lZDtcbiAgcG9zdDogKHR4OiBDcmVhdGVUeE9wdGlvbnMsIHRlcnJhQWRkcmVzcz86IHN0cmluZykgPT4gUHJvbWlzZTxUeFJlc3VsdD47XG4gIHNpZ246ICh0eDogQ3JlYXRlVHhPcHRpb25zLCB0ZXJyYUFkZHJlc3M/OiBzdHJpbmcpID0+IFByb21pc2U8U2lnblJlc3VsdD47XG4gIHNpZ25CeXRlczogKGJ5dGVzOiBCdWZmZXIsIHRlcnJhQWRkcmVzcz86IHN0cmluZykgPT4gUHJvbWlzZTxTaWduQnl0ZXNSZXN1bHQ+O1xuICBzdXBwb3J0RmVhdHVyZXM6IFNldDxcbiAgICAncG9zdCcgfCAnc2lnbicgfCAnc2lnbi1ieXRlcycgfCAnY3cyMC10b2tlbicgfCAnbmV0d29yaydcbiAgPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbm5lY3RlZFdhbGxldCh7XG4gIGNvbm5lY3Rpb24sXG4gIHBvc3QsXG4gIHNpZ24sXG4gIHNpZ25CeXRlcyxcbiAgc3VwcG9ydEZlYXR1cmVzLFxuICB3YWxsZXRzLFxuICBzdGF0dXMsXG4gIG5ldHdvcmssXG59OiBDcmVhdGVDb25uZWN0ZWRXYWxsZXRQYXJhbXMpOiBDb25uZWN0ZWRXYWxsZXQgfCB1bmRlZmluZWQge1xuICB0cnkge1xuICAgIGlmIChcbiAgICAgIHN0YXR1cyA9PT0gV2FsbGV0U3RhdHVzLldBTExFVF9DT05ORUNURUQgJiZcbiAgICAgIHdhbGxldHMubGVuZ3RoID4gMCAmJlxuICAgICAgLy8gVE9ETzogdmFsaWRhdGUgYWRkcmVzc2VzXG4gICAgICAvL0FjY0FkZHJlc3MudmFsaWRhdGUod2FsbGV0c1swXS50ZXJyYUFkZHJlc3MpICYmXG4gICAgICAhIWNvbm5lY3Rpb25cbiAgICApIHtcbiAgICAgIGNvbnN0IHsgYWRkcmVzc2VzLCBjb25uZWN0VHlwZSwgZGVzaWduIH0gPSB3YWxsZXRzWzBdO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuZXR3b3JrLFxuICAgICAgICBhZGRyZXNzZXMsXG4gICAgICAgIGRlc2lnbixcbiAgICAgICAgcG9zdDogKHR4OiBDcmVhdGVUeE9wdGlvbnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gcG9zdCh0eCwgYWRkcmVzc2VzW3R4LmNoYWluSURdKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbjogKHR4OiBDcmVhdGVUeE9wdGlvbnMpID0+IHtcbiAgICAgICAgICByZXR1cm4gc2lnbih0eCwgYWRkcmVzc2VzW3R4LmNoYWluSURdKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2lnbkJ5dGVzOiAoYnl0ZXM6IEJ1ZmZlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBzaWduQnl0ZXMoYnl0ZXMpO1xuICAgICAgICB9LFxuICAgICAgICBhdmFpbGFibGVQb3N0OiBzdXBwb3J0RmVhdHVyZXMuaGFzKCdwb3N0JyksXG4gICAgICAgIGF2YWlsYWJsZVNpZ246IHN1cHBvcnRGZWF0dXJlcy5oYXMoJ3NpZ24nKSxcbiAgICAgICAgYXZhaWxhYmxlU2lnbkJ5dGVzOiBzdXBwb3J0RmVhdHVyZXMuaGFzKCdzaWduLWJ5dGVzJyksXG4gICAgICAgIGNvbm5lY3RUeXBlLFxuICAgICAgICBjb25uZWN0aW9uLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuaW50ZXJmYWNlIENyZWF0ZUluc3RhbGxhYmxlV2FsbGV0cyB7XG4gIHN0YXR1czogV2FsbGV0U3RhdHVzO1xuICBpbnN0YWxsYXRpb25zOiBJbnN0YWxsYXRpb25bXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluc3RhbGxhYmxlV2FsbGV0cyh7XG4gIHN0YXR1cyxcbiAgaW5zdGFsbGF0aW9ucyxcbn06IENyZWF0ZUluc3RhbGxhYmxlV2FsbGV0cyk6IEluc3RhbGxhdGlvbltdIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHN0YXR1cyA9PT0gV2FsbGV0U3RhdHVzLldBTExFVF9OT1RfQ09OTkVDVEVEKSB7XG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnM7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbiJdfQ==