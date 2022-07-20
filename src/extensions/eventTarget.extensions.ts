interface EventTarget {
    getHTMLElement(): HTMLElement;
    getHTMLInputElement(): HTMLInputElement;
}

EventTarget.prototype.getHTMLElement = function () : HTMLElement {
    return this as HTMLElement;
}

EventTarget.prototype.getHTMLInputElement = function () : HTMLInputElement {
    return this as HTMLInputElement;
}
