export const Keys = {
    codeFragmentKey: "```",
} as const;

export const KeyCode = {
    V: "V"
} as const;

export const EventTypeSupport = {
    keydown: "keydown"
} as const;

type allKeys = typeof Keys | typeof KeyCode | typeof EventTypeSupport;

type allKeyValues =  allKeys[keyof allKeys];