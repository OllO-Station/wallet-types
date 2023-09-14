/** User denied the request */
export class UserDenied extends Error {
    constructor() {
        super('User Denied');
        this.toString = () => {
            return `[${this.name}]`;
        };
        this.name = 'UserDenied';
    }
}
/** the user did not complete the action during a specific time */
export class Timeout extends Error {
    constructor(message) {
        super(message);
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.name = 'Timeout';
    }
}
/** failed on signBytes() */
export class SignBytesFailed extends Error {
    constructor(bytes, message) {
        super(message);
        this.bytes = bytes;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]`;
        };
        this.name = 'SignBytesFailed';
    }
}
/** Failed to create tx (did not make a txhash) */
export class CreateTxFailed extends Error {
    constructor(tx, message) {
        super(message);
        this.tx = tx;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.tx, null, 2)}`;
        };
        this.name = 'CreateTxFailed';
    }
}
/** Failed process the tx (maked a txhash) */
export class TxFailed extends Error {
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
/** Unknown error */
export class TxUnspecifiedError extends Error {
    constructor(tx, message) {
        super(message);
        this.tx = tx;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.tx, null, 2)}`;
        };
        this.name = 'TxUnspecifiedError';
    }
}
export class SignBytesUnspecifiedError extends Error {
    constructor(bytes, message) {
        super(message);
        this.bytes = bytes;
        this.toString = () => {
            return `[${this.name} message="${this.message}"]\n${JSON.stringify(this.bytes, null, 2)}`;
        };
        this.name = 'SignBytesUnspecifiedError';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0B0ZXJyYS1tb25leS93YWxsZXQtdHlwZXMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLDhCQUE4QjtBQUM5QixNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQUs7SUFDbkM7UUFDRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJdkIsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBTEEsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDM0IsQ0FBQztDQUtGO0FBRUQsa0VBQWtFO0FBQ2xFLE1BQU0sT0FBTyxPQUFRLFNBQVEsS0FBSztJQUNoQyxZQUFZLE9BQWU7UUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBSWpCLGFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksYUFBYSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUM7UUFDcEQsQ0FBQyxDQUFDO1FBTEEsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDeEIsQ0FBQztDQUtGO0FBRUQsNEJBQTRCO0FBQzVCLE1BQU0sT0FBTyxlQUFnQixTQUFRLEtBQUs7SUFDeEMsWUFBNEIsS0FBYSxFQUFFLE9BQWU7UUFDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUt6QyxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDO1FBQ3BELENBQUMsQ0FBQztRQUxBLElBQUksQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztDQUtGO0FBRUQsa0RBQWtEO0FBQ2xELE1BQU0sT0FBTyxjQUFlLFNBQVEsS0FBSztJQUN2QyxZQUE0QixFQUFtQixFQUFFLE9BQWU7UUFDOUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFLL0MsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FDaEUsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLEVBQ0osQ0FBQyxDQUNGLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQztRQVRBLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztDQVNGO0FBRUQsNkNBQTZDO0FBQzdDLE1BQU0sT0FBTyxRQUFTLFNBQVEsS0FBSztJQUNqQyxZQUNrQixFQUFtQixFQUNuQixNQUEwQixFQUMxQyxPQUFlLEVBQ0MsV0FBZ0I7UUFFaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBTEMsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBb0I7UUFFMUIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFNbEMsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLElBQUksQ0FBQyxNQUFNLGNBQ3pDLElBQUksQ0FBQyxPQUNQLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUN4RCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLEVBQ0osQ0FBQyxDQUNGLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQztRQVhBLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Q0FXRjtBQUVELG9CQUFvQjtBQUNwQixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsS0FBSztJQUMzQyxZQUE0QixFQUFtQixFQUFFLE9BQWU7UUFDOUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFLL0MsYUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxhQUFhLElBQUksQ0FBQyxPQUFPLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FDaEUsSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLEVBQ0osQ0FBQyxDQUNGLEVBQUUsQ0FBQztRQUNOLENBQUMsQ0FBQztRQVRBLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztDQVNGO0FBRUQsTUFBTSxPQUFPLHlCQUEwQixTQUFRLEtBQUs7SUFDbEQsWUFBNEIsS0FBYSxFQUFFLE9BQWU7UUFDeEQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRFcsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUt6QyxhQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2QsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLGFBQWEsSUFBSSxDQUFDLE9BQU8sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUNoRSxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksRUFDSixDQUFDLENBQ0YsRUFBRSxDQUFDO1FBQ04sQ0FBQyxDQUFDO1FBVEEsSUFBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztJQUMxQyxDQUFDO0NBU0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVUeE9wdGlvbnMgfSBmcm9tICdAdGVycmEtbW9uZXkvZmVhdGhlci5qcyc7XG5cbi8qKiBVc2VyIGRlbmllZCB0aGUgcmVxdWVzdCAqL1xuZXhwb3J0IGNsYXNzIFVzZXJEZW5pZWQgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdVc2VyIERlbmllZCcpO1xuICAgIHRoaXMubmFtZSA9ICdVc2VyRGVuaWVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfV1gO1xuICB9O1xufVxuXG4vKiogdGhlIHVzZXIgZGlkIG5vdCBjb21wbGV0ZSB0aGUgYWN0aW9uIGR1cmluZyBhIHNwZWNpZmljIHRpbWUgKi9cbmV4cG9ydCBjbGFzcyBUaW1lb3V0IGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnVGltZW91dCc7XG4gIH1cblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gbWVzc2FnZT1cIiR7dGhpcy5tZXNzYWdlfVwiXWA7XG4gIH07XG59XG5cbi8qKiBmYWlsZWQgb24gc2lnbkJ5dGVzKCkgKi9cbmV4cG9ydCBjbGFzcyBTaWduQnl0ZXNGYWlsZWQgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBieXRlczogQnVmZmVyLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnU2lnbkJ5dGVzRmFpbGVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdYDtcbiAgfTtcbn1cblxuLyoqIEZhaWxlZCB0byBjcmVhdGUgdHggKGRpZCBub3QgbWFrZSBhIHR4aGFzaCkgKi9cbmV4cG9ydCBjbGFzcyBDcmVhdGVUeEZhaWxlZCBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHR4OiBDcmVhdGVUeE9wdGlvbnMsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdDcmVhdGVUeEZhaWxlZCc7XG4gIH1cblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gbWVzc2FnZT1cIiR7dGhpcy5tZXNzYWdlfVwiXVxcbiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICB0aGlzLnR4LFxuICAgICAgbnVsbCxcbiAgICAgIDIsXG4gICAgKX1gO1xuICB9O1xufVxuXG4vKiogRmFpbGVkIHByb2Nlc3MgdGhlIHR4IChtYWtlZCBhIHR4aGFzaCkgKi9cbmV4cG9ydCBjbGFzcyBUeEZhaWxlZCBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHR4OiBDcmVhdGVUeE9wdGlvbnMsXG4gICAgcHVibGljIHJlYWRvbmx5IHR4aGFzaDogc3RyaW5nIHwgdW5kZWZpbmVkLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVhZG9ubHkgcmF3X21lc3NhZ2U6IGFueSxcbiAgKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1R4RmFpbGVkJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSB0eGhhc2g9XCIke3RoaXMudHhoYXNofVwiIG1lc3NhZ2U9XCIke1xuICAgICAgdGhpcy5tZXNzYWdlXG4gICAgfVwiXVxcbiR7SlNPTi5zdHJpbmdpZnkodGhpcy50eCwgbnVsbCwgMil9XFxuJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHRoaXMucmF3X21lc3NhZ2UsXG4gICAgICBudWxsLFxuICAgICAgMixcbiAgICApfWA7XG4gIH07XG59XG5cbi8qKiBVbmtub3duIGVycm9yICovXG5leHBvcnQgY2xhc3MgVHhVbnNwZWNpZmllZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdHg6IENyZWF0ZVR4T3B0aW9ucywgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ1R4VW5zcGVjaWZpZWRFcnJvcic7XG4gIH1cblxuICB0b1N0cmluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gYFske3RoaXMubmFtZX0gbWVzc2FnZT1cIiR7dGhpcy5tZXNzYWdlfVwiXVxcbiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICB0aGlzLnR4LFxuICAgICAgbnVsbCxcbiAgICAgIDIsXG4gICAgKX1gO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgU2lnbkJ5dGVzVW5zcGVjaWZpZWRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGJ5dGVzOiBCdWZmZXIsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMubmFtZSA9ICdTaWduQnl0ZXNVbnNwZWNpZmllZEVycm9yJztcbiAgfVxuXG4gIHRvU3RyaW5nID0gKCkgPT4ge1xuICAgIHJldHVybiBgWyR7dGhpcy5uYW1lfSBtZXNzYWdlPVwiJHt0aGlzLm1lc3NhZ2V9XCJdXFxuJHtKU09OLnN0cmluZ2lmeShcbiAgICAgIHRoaXMuYnl0ZXMsXG4gICAgICBudWxsLFxuICAgICAgMixcbiAgICApfWA7XG4gIH07XG59XG4iXX0=