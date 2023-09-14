"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignBytesUnspecifiedError = exports.TxUnspecifiedError = exports.TxFailed = exports.CreateTxFailed = exports.SignBytesFailed = exports.Timeout = exports.UserDenied = void 0;
/** User denied the request */
class UserDenied extends Error {
    constructor() {
        super('User Denied');
        this.toString = () => {
            return `[${this.name}]`;
        };
        this.name = 'UserDenied';
    }
}
exports.UserDenied = UserDenied;
/** the user did not complete the action during a specific time */
class Timeout extends Error {
    constructor(message) {
        super(message);
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.name = 'Timeout';
    }
}
exports.Timeout = Timeout;
/** failed on signBytes() */
class SignBytesFailed extends Error {
    constructor(bytes, message) {
        super(message);
        this.bytes = bytes;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.name = 'SignBytesFailed';
    }
}
exports.SignBytesFailed = SignBytesFailed;
/** Failed to create tx (did not make a txhash) */
class CreateTxFailed extends Error {
    constructor(tx, message) {
        super(message);
        this.tx = tx;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.tx, null, 2)}`;
        };
        this.name = 'CreateTxFailed';
    }
}
exports.CreateTxFailed = CreateTxFailed;
/** Failed process the tx (maked a txhash) */
class TxFailed extends Error {
    constructor(tx, txhash, message, raw_message) {
        super(message);
        this.tx = tx;
        this.txhash = txhash;
        this.raw_message = raw_message;
        this.toString = () => {
            return `[${this.name} txhash="${this.txhash}" message="${this.message}"]\n${JSON.stringify(this.tx, null, 2)}\n${JSON.stringify(this.raw_message, null, 2)}`;
        };
        this.name = 'TxFailed';
    }
}
exports.TxFailed = TxFailed;
/** Unknown error */
class TxUnspecifiedError extends Error {
    constructor(tx, message) {
        super(message);
        this.tx = tx;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.tx, null, 2)}`;
        };
        this.name = 'TxUnspecifiedError';
    }
}
exports.TxUnspecifiedError = TxUnspecifiedError;
class SignBytesUnspecifiedError extends Error {
    constructor(bytes, message) {
        super(message);
        this.bytes = bytes;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.bytes, null, 2)}`;
        };
        this.name = 'SignBytesUnspecifiedError';
    }
}
exports.SignBytesUnspecifiedError = SignBytesUnspecifiedError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtdHlwZXMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDhCQUE4QjtBQUM5QixNQUFhLFVBQVcsU0FBUSxLQUFLO0lBQ25DO1FBQ0UsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBSXZCLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUxBLElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FLRjtBQVRELGdDQVNDO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQWEsT0FBUSxTQUFRLEtBQUs7SUFDaEMsWUFBWSxPQUFlO1FBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUlqQixhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ3BELENBQUMsQ0FBQztRQUxBLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Q0FLRjtBQVRELDBCQVNDO0FBRUQsNEJBQTRCO0FBQzVCLE1BQWEsZUFBZ0IsU0FBUSxLQUFLO0lBQ3hDLFlBQTRCLEtBQWEsRUFBRSxPQUFlO1FBQ3hELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURXLFVBQUssR0FBTCxLQUFLLENBQVE7UUFLekMsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQztRQUNwRCxDQUFDLENBQUM7UUFMQSxJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7Q0FLRjtBQVRELDBDQVNDO0FBRUQsa0RBQWtEO0FBQ2xELE1BQWEsY0FBZSxTQUFRLEtBQUs7SUFDdkMsWUFBNEIsRUFBbUIsRUFBRSxPQUFlO1FBQzlELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURXLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBSy9DLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksYUFBYSxJQUFJLENBQUMsT0FBTyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQ2hFLElBQUksQ0FBQyxFQUFFLEVBQ1AsSUFBSSxFQUNKLENBQUMsQ0FDRixFQUFFLENBQUM7UUFDTixDQUFDLENBQUM7UUFUQSxJQUFJLENBQUMsSUFBSSxHQUFHLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Q0FTRjtBQWJELHdDQWFDO0FBRUQsNkNBQTZDO0FBQzdDLE1BQWEsUUFBUyxTQUFRLEtBQUs7SUFDakMsWUFDa0IsRUFBbUIsRUFDbkIsTUFBMEIsRUFDMUMsT0FBZSxFQUNDLFdBQWdCO1FBRWhDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUxDLE9BQUUsR0FBRixFQUFFLENBQWlCO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQW9CO1FBRTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBTWxDLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksWUFBWSxJQUFJLENBQUMsTUFBTSxjQUN6QyxJQUFJLENBQUMsT0FDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FDeEQsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxFQUNKLENBQUMsQ0FDRixFQUFFLENBQUM7UUFDTixDQUFDLENBQUM7UUFYQSxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUN6QixDQUFDO0NBV0Y7QUFwQkQsNEJBb0JDO0FBRUQsb0JBQW9CO0FBQ3BCLE1BQWEsa0JBQW1CLFNBQVEsS0FBSztJQUMzQyxZQUE0QixFQUFtQixFQUFFLE9BQWU7UUFDOUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFLL0MsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FDaEUsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLEVBQ0osQ0FBQyxDQUNGLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQztRQVRBLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztDQVNGO0FBYkQsZ0RBYUM7QUFFRCxNQUFhLHlCQUEwQixTQUFRLEtBQUs7SUFDbEQsWUFBNEIsS0FBYSxFQUFFLE9BQWU7UUFDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUt6QyxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUFDLE9BQU8sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUNoRSxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksRUFDSixDQUFDLENBQ0YsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBVEEsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0NBU0Y7QUFiRCw4REFhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZVR4T3B0aW9ucyB9IGZyb20gJ0B0ZXJyYS1tb25leS9mZWF0aGVyLmpzJztcblxuLyoqIFVzZXIgZGVuaWVkIHRoZSByZXF1ZXN0ICovXG5leHBvcnQgY2xhc3MgVXNlckRlbmllZCBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ1VzZXIgRGVuaWVkJyk7XG4gICAgdGhpcy5uYW1lID0gJ1VzZXJEZW5pZWQnO1xuICB9XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9XWA7XG4gIH07XG59XG5cbi8qKiB0aGUgdXNlciBkaWQgbm90IGNvbXBsZXRlIHRoZSBhY3Rpb24gZHVyaW5nIGEgc3BlY2lmaWMgdGltZSAqL1xuZXhwb3J0IGNsYXNzIFRpbWVvdXQgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdUaW1lb3V0JztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdYDtcbiAgfTtcbn1cblxuLyoqIGZhaWxlZCBvbiBzaWduQnl0ZXMoKSAqL1xuZXhwb3J0IGNsYXNzIFNpZ25CeXRlc0ZhaWxlZCBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGJ5dGVzOiBCdWZmZXIsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdTaWduQnl0ZXNGYWlsZWQnO1xuICB9XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9IG1lc3NhZ2U9XCIke3RoaXMubWVzc2FnZX1cIl1gO1xuICB9O1xufVxuXG4vKiogRmFpbGVkIHRvIGNyZWF0ZSB0eCAoZGlkIG5vdCBtYWtlIGEgdHhoYXNoKSAqL1xuZXhwb3J0IGNsYXNzIENyZWF0ZVR4RmFpbGVkIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdHg6IENyZWF0ZVR4T3B0aW9ucywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ0NyZWF0ZVR4RmFpbGVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdXFxuJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHRoaXMudHgsXG4gICAgICBudWxsLFxuICAgICAgMixcbiAgICApfWA7XG4gIH07XG59XG5cbi8qKiBGYWlsZWQgcHJvY2VzcyB0aGUgdHggKG1ha2VkIGEgdHhoYXNoKSAqL1xuZXhwb3J0IGNsYXNzIFR4RmFpbGVkIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHg6IENyZWF0ZVR4T3B0aW9ucyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHhoYXNoOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSByYXdfbWVzc2FnZTogYW55LFxuICApIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnVHhGYWlsZWQnO1xuICB9XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9IHR4aGFzaD1cIiR7dGhpcy50eGhhc2h9XCIgbWVzc2FnZT1cIiR7XG4gICAgICB0aGlzLm1lc3NhZ2VcbiAgICB9XCJdXFxuJHtKU09OLnN0cmluZ2lmeSh0aGlzLnR4LCBudWxsLCAyKX1cXG4ke0pTT04uc3RyaW5naWZ5KFxuICAgICAgdGhpcy5yYXdfbWVzc2FnZSxcbiAgICAgIG51bGwsXG4gICAgICAyLFxuICAgICl9YDtcbiAgfTtcbn1cblxuLyoqIFVua25vd24gZXJyb3IgKi9cbmV4cG9ydCBjbGFzcyBUeFVuc3BlY2lmaWVkRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB0eDogQ3JlYXRlVHhPcHRpb25zLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnVHhVbnNwZWNpZmllZEVycm9yJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdXFxuJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHRoaXMudHgsXG4gICAgICBudWxsLFxuICAgICAgMixcbiAgICApfWA7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBTaWduQnl0ZXNVbnNwZWNpZmllZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgYnl0ZXM6IEJ1ZmZlciwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1NpZ25CeXRlc1Vuc3BlY2lmaWVkRXJyb3InO1xuICB9XG5cbiAgdG9TdHJpbmcgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGBbJHt0aGlzLm5hbWV9IG1lc3NhZ2U9XCIke3RoaXMubWVzc2FnZX1cIl1cXG4ke0pTT04uc3RyaW5naWZ5KFxuICAgICAgdGhpcy5ieXRlcyxcbiAgICAgIG51bGwsXG4gICAgICAyLFxuICAgICl9YDtcbiAgfTtcbn1cbiJdfQ==