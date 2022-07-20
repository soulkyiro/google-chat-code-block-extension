import { KeyCode } from '../models/allKeyValues';

declare global {
    interface KeyboardEvent {
        isSpecialPaste(): boolean;
    }
}

KeyboardEvent.prototype.isSpecialPaste = function () : boolean {
    return this.key === KeyCode.V && this.ctrlKey && this.shiftKey;
}

