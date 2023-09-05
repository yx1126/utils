
export type Nullable<T> = T | null | undefined;

export type Arrayable<T> = T | Array<T>;

export type ArrayOf<T> = T extends Array<infer R> ? R : never;

export type ArgumentsOf<T> = T extends ((...args: infer R) => any) ? R : never;

export type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};

export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

export type DeepWritable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepWritable<T[P]> : T[P];
};
