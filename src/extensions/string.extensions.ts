interface String {
    prefix(pre: string): string;
    postfix(pre: string): string;
    removeAll(pattern: string): string;
}

String.prototype.prefix = function (pre: string) {
    return pre + this;
};

String.prototype.postfix = function (post: string) {
    return this + post;
};

String.prototype.removeAll = function (pattern: string) {
    return this.replaceAll(pattern, "");
};

