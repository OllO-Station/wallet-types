"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectType = exports.WalletStatus = void 0;
var WalletStatus;
(function (WalletStatus) {
    WalletStatus["INITIALIZING"] = "INITIALIZING";
    WalletStatus["WALLET_NOT_CONNECTED"] = "WALLET_NOT_CONNECTED";
    WalletStatus["WALLET_CONNECTED"] = "WALLET_CONNECTED";
})(WalletStatus = exports.WalletStatus || (exports.WalletStatus = {}));
var ConnectType;
(function (ConnectType) {
    /** Terra Station Extension or compatible browser extensions */
    ConnectType["EXTENSION"] = "EXTENSION";
    /** Terra Station Mobile or compatible mobile wallets */
    ConnectType["WALLETCONNECT"] = "WALLETCONNECT";
    /** Read only mode - View an address */
    ConnectType["READONLY"] = "READONLY";
    /** Plugins injected from app */
    ConnectType["PLUGINS"] = "PLUGINS";
})(ConnectType = exports.ConnectType || (exports.ConnectType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQHRlcnJhLW1vbmV5L3dhbGxldC10eXBlcy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUEyQkEsSUFBWSxZQUlYO0FBSkQsV0FBWSxZQUFZO0lBQ3RCLDZDQUE2QixDQUFBO0lBQzdCLDZEQUE2QyxDQUFBO0lBQzdDLHFEQUFxQyxDQUFBO0FBQ3ZDLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUVELElBQVksV0FZWDtBQVpELFdBQVksV0FBVztJQUNyQiwrREFBK0Q7SUFDL0Qsc0NBQXVCLENBQUE7SUFFdkIsd0RBQXdEO0lBQ3hELDhDQUErQixDQUFBO0lBRS9CLHVDQUF1QztJQUN2QyxvQ0FBcUIsQ0FBQTtJQUVyQixnQ0FBZ0M7SUFDaEMsa0NBQW1CLENBQUE7QUFDckIsQ0FBQyxFQVpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBWXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjQWRkcmVzcywgQ3JlYXRlVHhPcHRpb25zLCBMQ0RDbGllbnRDb25maWcsIFB1YmxpY0tleSwgVHggfSBmcm9tICdAdGVycmEtbW9uZXkvZmVhdGhlci5qcyc7XG5cbmV4cG9ydCB0eXBlIE5ldHdvcmtJbmZvID0gUmVjb3JkPHN0cmluZywgTENEQ2xpZW50Q29uZmlnPlxuZXhwb3J0IGludGVyZmFjZSBUeFJlc3VsdCBleHRlbmRzIENyZWF0ZVR4T3B0aW9ucyB7XG4gIHJlc3VsdDoge1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIHJhd19sb2c6IHN0cmluZztcbiAgICB0eGhhc2g6IHN0cmluZztcbiAgfTtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduUmVzdWx0IGV4dGVuZHMgQ3JlYXRlVHhPcHRpb25zIHtcbiAgcmVzdWx0OiBUeDtcbiAgc3VjY2VzczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduQnl0ZXNSZXN1bHQge1xuICAvL2VuY3J5cHRlZEJ5dGVzOiBzdHJpbmc7XG4gIHJlc3VsdDoge1xuICAgIHJlY2lkOiBudW1iZXI7XG4gICAgc2lnbmF0dXJlOiBVaW50OEFycmF5O1xuICAgIHB1YmxpY19rZXk/OiBQdWJsaWNLZXk7XG4gIH07XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIFdhbGxldFN0YXR1cyB7XG4gIElOSVRJQUxJWklORyA9ICdJTklUSUFMSVpJTkcnLFxuICBXQUxMRVRfTk9UX0NPTk5FQ1RFRCA9ICdXQUxMRVRfTk9UX0NPTk5FQ1RFRCcsXG4gIFdBTExFVF9DT05ORUNURUQgPSAnV0FMTEVUX0NPTk5FQ1RFRCcsXG59XG5cbmV4cG9ydCBlbnVtIENvbm5lY3RUeXBlIHtcbiAgLyoqIFRlcnJhIFN0YXRpb24gRXh0ZW5zaW9uIG9yIGNvbXBhdGlibGUgYnJvd3NlciBleHRlbnNpb25zICovXG4gIEVYVEVOU0lPTiA9ICdFWFRFTlNJT04nLFxuXG4gIC8qKiBUZXJyYSBTdGF0aW9uIE1vYmlsZSBvciBjb21wYXRpYmxlIG1vYmlsZSB3YWxsZXRzICovXG4gIFdBTExFVENPTk5FQ1QgPSAnV0FMTEVUQ09OTkVDVCcsXG5cbiAgLyoqIFJlYWQgb25seSBtb2RlIC0gVmlldyBhbiBhZGRyZXNzICovXG4gIFJFQURPTkxZID0gJ1JFQURPTkxZJyxcblxuICAvKiogUGx1Z2lucyBpbmplY3RlZCBmcm9tIGFwcCAqL1xuICBQTFVHSU5TID0gJ1BMVUdJTlMnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3Rpb24ge1xuICB0eXBlOiBDb25uZWN0VHlwZTtcbiAgaWRlbnRpZmllcj86IHN0cmluZztcblxuICBuYW1lOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsYXRpb24ge1xuICB0eXBlOiBDb25uZWN0VHlwZTtcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuXG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRJbmZvIHtcbiAgY29ubmVjdFR5cGU6IENvbm5lY3RUeXBlO1xuICAvLyB0ZXJyYUFkZHJlc3M6IEFjY0FkZHJlc3M7XG4gIGFkZHJlc3NlczogUmVjb3JkPHN0cmluZywgQWNjQWRkcmVzcz47XG4gIGRlc2lnbj86IHN0cmluZztcbiAgbWV0YWRhdGE/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgdHlwZSBXYWxsZXRTdGF0ZXMgPVxuICB8IHtcbiAgICBzdGF0dXM6IFdhbGxldFN0YXR1cy5JTklUSUFMSVpJTkc7XG4gICAgbmV0d29yazogTmV0d29ya0luZm87XG4gIH1cbiAgfCB7XG4gICAgc3RhdHVzOiBXYWxsZXRTdGF0dXMuV0FMTEVUX05PVF9DT05ORUNURUQ7XG4gICAgbmV0d29yazogTmV0d29ya0luZm87XG4gIH1cbiAgfCB7XG4gICAgc3RhdHVzOiBXYWxsZXRTdGF0dXMuV0FMTEVUX0NPTk5FQ1RFRDtcbiAgICBjb25uZWN0aW9uOiBDb25uZWN0aW9uO1xuICAgIG5ldHdvcms6IE5ldHdvcmtJbmZvO1xuICAgIHdhbGxldHM6IFdhbGxldEluZm9bXTtcbiAgICAvKiogVGhpcyB0eXBlIGlzIHNhbWUgYXMgYGltcG9ydCB0eXBlIHsgVGVycmFXZWJFeHRlbnNpb25GZWF0dXJlcyB9IGZyb20gJ0B0ZXJyYS1tb25leS93ZWItZXh0ZW5zaW9uLWludGVyZmFjZSdgICovXG4gICAgc3VwcG9ydEZlYXR1cmVzOiBTZXQ8XG4gICAgICAncG9zdCcgfCAnc2lnbicgfCAnc2lnbi1ieXRlcycgfCAnY3cyMC10b2tlbicgfCAnbmV0d29yaydcbiAgICA+O1xuICB9O1xuIl19