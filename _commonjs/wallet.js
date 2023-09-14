"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstallableWallets = exports.createConnectedWallet = void 0;
const types_1 = require("./types");
function createConnectedWallet({ connection, post, sign, signBytes, supportFeatures, wallets, status, network, }) {
    try {
        if (status === types_1.WalletStatus.WALLET_CONNECTED &&
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
exports.createConnectedWallet = createConnectedWallet;
function createInstallableWallets({ status, installations, }) {
    if (status === types_1.WalletStatus.WALLET_NOT_CONNECTED) {
        return installations;
    }
    return undefined;
}
exports.createInstallableWallets = createInstallableWallets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtdHlwZXMvd2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQVVpQjtBQWdDakIsU0FBZ0IscUJBQXFCLENBQUMsRUFDcEMsVUFBVSxFQUNWLElBQUksRUFDSixJQUFJLEVBQ0osU0FBUyxFQUNULGVBQWUsRUFDZixPQUFPLEVBQ1AsTUFBTSxFQUNOLE9BQU8sR0FDcUI7SUFDNUIsSUFBSTtRQUNGLElBQ0UsTUFBTSxLQUFLLG9CQUFZLENBQUMsZ0JBQWdCO1lBQ3hDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNsQiwyQkFBMkI7WUFDM0IsaURBQWlEO1lBQ2pELENBQUMsQ0FBQyxVQUFVLEVBQ1o7WUFDQSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEQsT0FBTztnQkFDTCxPQUFPO2dCQUNQLFNBQVM7Z0JBQ1QsTUFBTTtnQkFDTixJQUFJLEVBQUUsQ0FBQyxFQUFtQixFQUFFLEVBQUU7b0JBQzVCLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLENBQUMsRUFBbUIsRUFBRSxFQUFFO29CQUM1QixPQUFPLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2dCQUNELFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxFQUFFO29CQUMzQixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxhQUFhLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQzFDLGFBQWEsRUFBRSxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDMUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQ3JELFdBQVc7Z0JBQ1gsVUFBVTthQUNYLENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxTQUFTLENBQUM7U0FDbEI7S0FDRjtJQUFDLFdBQU07UUFDTixPQUFPLFNBQVMsQ0FBQztLQUNsQjtBQUNILENBQUM7QUE3Q0Qsc0RBNkNDO0FBT0QsU0FBZ0Isd0JBQXdCLENBQUMsRUFDdkMsTUFBTSxFQUNOLGFBQWEsR0FDWTtJQUN6QixJQUFJLE1BQU0sS0FBSyxvQkFBWSxDQUFDLG9CQUFvQixFQUFFO1FBQ2hELE9BQU8sYUFBYSxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQVJELDREQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjQWRkcmVzcywgQ3JlYXRlVHhPcHRpb25zIH0gZnJvbSAnQHRlcnJhLW1vbmV5L2ZlYXRoZXIuanMnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvbixcbiAgQ29ubmVjdFR5cGUsXG4gIEluc3RhbGxhdGlvbixcbiAgTmV0d29ya0luZm8sXG4gIFNpZ25CeXRlc1Jlc3VsdCxcbiAgU2lnblJlc3VsdCxcbiAgVHhSZXN1bHQsXG4gIFdhbGxldEluZm8sXG4gIFdhbGxldFN0YXR1cyxcbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29ubmVjdGVkV2FsbGV0IHtcbiAgbmV0d29yazogTmV0d29ya0luZm87XG4gIGFkZHJlc3NlczogUmVjb3JkPHN0cmluZywgQWNjQWRkcmVzcz47XG4gIC8vd2FsbGV0QWRkcmVzczogQWNjQWRkcmVzcztcbiAgLyoqIHRlcnJhQWRkcmVzcyBpcyBzYW1lIGFzIHdhbGxldEFkZHJlc3MgKi9cbiAgLy90ZXJyYUFkZHJlc3M6IEFjY0FkZHJlc3M7XG4gIGRlc2lnbj86IHN0cmluZztcbiAgcG9zdDogKHR4OiBDcmVhdGVUeE9wdGlvbnMpID0+IFByb21pc2U8VHhSZXN1bHQ+O1xuICBzaWduOiAodHg6IENyZWF0ZVR4T3B0aW9ucykgPT4gUHJvbWlzZTxTaWduUmVzdWx0PjtcbiAgc2lnbkJ5dGVzOiAoYnl0ZXM6IEJ1ZmZlcikgPT4gUHJvbWlzZTxTaWduQnl0ZXNSZXN1bHQ+O1xuICBhdmFpbGFibGVQb3N0OiBib29sZWFuO1xuICBhdmFpbGFibGVTaWduOiBib29sZWFuO1xuICBhdmFpbGFibGVTaWduQnl0ZXM6IGJvb2xlYW47XG4gIGNvbm5lY3RUeXBlOiBDb25uZWN0VHlwZTtcbiAgY29ubmVjdGlvbjogQ29ubmVjdGlvbjtcbn1cblxuaW50ZXJmYWNlIENyZWF0ZUNvbm5lY3RlZFdhbGxldFBhcmFtcyB7XG4gIHN0YXR1czogV2FsbGV0U3RhdHVzO1xuICBuZXR3b3JrOiBOZXR3b3JrSW5mbztcbiAgd2FsbGV0czogV2FsbGV0SW5mb1tdO1xuICBjb25uZWN0aW9uOiBDb25uZWN0aW9uIHwgdW5kZWZpbmVkO1xuICBwb3N0OiAodHg6IENyZWF0ZVR4T3B0aW9ucywgdGVycmFBZGRyZXNzPzogc3RyaW5nKSA9PiBQcm9taXNlPFR4UmVzdWx0PjtcbiAgc2lnbjogKHR4OiBDcmVhdGVUeE9wdGlvbnMsIHRlcnJhQWRkcmVzcz86IHN0cmluZykgPT4gUHJvbWlzZTxTaWduUmVzdWx0PjtcbiAgc2lnbkJ5dGVzOiAoYnl0ZXM6IEJ1ZmZlciwgdGVycmFBZGRyZXNzPzogc3RyaW5nKSA9PiBQcm9taXNlPFNpZ25CeXRlc1Jlc3VsdD47XG4gIHN1cHBvcnRGZWF0dXJlczogU2V0PFxuICAgICdwb3N0JyB8ICdzaWduJyB8ICdzaWduLWJ5dGVzJyB8ICdjdzIwLXRva2VuJyB8ICduZXR3b3JrJ1xuICA+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29ubmVjdGVkV2FsbGV0KHtcbiAgY29ubmVjdGlvbixcbiAgcG9zdCxcbiAgc2lnbixcbiAgc2lnbkJ5dGVzLFxuICBzdXBwb3J0RmVhdHVyZXMsXG4gIHdhbGxldHMsXG4gIHN0YXR1cyxcbiAgbmV0d29yayxcbn06IENyZWF0ZUNvbm5lY3RlZFdhbGxldFBhcmFtcyk6IENvbm5lY3RlZFdhbGxldCB8IHVuZGVmaW5lZCB7XG4gIHRyeSB7XG4gICAgaWYgKFxuICAgICAgc3RhdHVzID09PSBXYWxsZXRTdGF0dXMuV0FMTEVUX0NPTk5FQ1RFRCAmJlxuICAgICAgd2FsbGV0cy5sZW5ndGggPiAwICYmXG4gICAgICAvLyBUT0RPOiB2YWxpZGF0ZSBhZGRyZXNzZXNcbiAgICAgIC8vQWNjQWRkcmVzcy52YWxpZGF0ZSh3YWxsZXRzWzBdLnRlcnJhQWRkcmVzcykgJiZcbiAgICAgICEhY29ubmVjdGlvblxuICAgICkge1xuICAgICAgY29uc3QgeyBhZGRyZXNzZXMsIGNvbm5lY3RUeXBlLCBkZXNpZ24gfSA9IHdhbGxldHNbMF07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5ldHdvcmssXG4gICAgICAgIGFkZHJlc3NlcyxcbiAgICAgICAgZGVzaWduLFxuICAgICAgICBwb3N0OiAodHg6IENyZWF0ZVR4T3B0aW9ucykgPT4ge1xuICAgICAgICAgIHJldHVybiBwb3N0KHR4LCBhZGRyZXNzZXNbdHguY2hhaW5JRF0pO1xuICAgICAgICB9LFxuICAgICAgICBzaWduOiAodHg6IENyZWF0ZVR4T3B0aW9ucykgPT4ge1xuICAgICAgICAgIHJldHVybiBzaWduKHR4LCBhZGRyZXNzZXNbdHguY2hhaW5JRF0pO1xuICAgICAgICB9LFxuICAgICAgICBzaWduQnl0ZXM6IChieXRlczogQnVmZmVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNpZ25CeXRlcyhieXRlcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGF2YWlsYWJsZVBvc3Q6IHN1cHBvcnRGZWF0dXJlcy5oYXMoJ3Bvc3QnKSxcbiAgICAgICAgYXZhaWxhYmxlU2lnbjogc3VwcG9ydEZlYXR1cmVzLmhhcygnc2lnbicpLFxuICAgICAgICBhdmFpbGFibGVTaWduQnl0ZXM6IHN1cHBvcnRGZWF0dXJlcy5oYXMoJ3NpZ24tYnl0ZXMnKSxcbiAgICAgICAgY29ubmVjdFR5cGUsXG4gICAgICAgIGNvbm5lY3Rpb24sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG5pbnRlcmZhY2UgQ3JlYXRlSW5zdGFsbGFibGVXYWxsZXRzIHtcbiAgc3RhdHVzOiBXYWxsZXRTdGF0dXM7XG4gIGluc3RhbGxhdGlvbnM6IEluc3RhbGxhdGlvbltdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbGFibGVXYWxsZXRzKHtcbiAgc3RhdHVzLFxuICBpbnN0YWxsYXRpb25zLFxufTogQ3JlYXRlSW5zdGFsbGFibGVXYWxsZXRzKTogSW5zdGFsbGF0aW9uW10gfCB1bmRlZmluZWQge1xuICBpZiAoc3RhdHVzID09PSBXYWxsZXRTdGF0dXMuV0FMTEVUX05PVF9DT05ORUNURUQpIHtcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9ucztcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl19