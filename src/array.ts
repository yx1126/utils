import type { Arrayable, Nullable } from "./types";

/**
 * Returns a array.
 *
 * @example
 * ```js
 * toArray();               // []
 * toArray(1);              // [1]
 * toArray({ count: 0 });   // [{ count: 0 }]
 * toArray([{ count: 0 }]); // [{ count: 0 }]
 * ```
 * @param {any} data
 * @returns {Array}
 */
export function toArray<T>(data?: Nullable<Arrayable<T>>): Array<T> {
    data = data ?? [];
    return Array.isArray(data) ? data : [data];
}

/**
 * Returns a array.
 *
 * @example
 * ```js
 * makeArray(5, (i) => i * 2); // [0, 2, 4, 6, 8]
 * ```
 *
 * @param {Number} length
 * @param {Function} mapfn
 * @returns {Array}
 */
export function makeArray<T>(length: number, mapfn: (index: number) => T) {
    return Array.from({ length }, (_, i) => mapfn(i));
}
