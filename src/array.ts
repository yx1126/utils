import type { Arrayable, Nullable } from "./types";
import { isArray, isString } from "./validata";

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
 * @param data
 * @returns
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
 * const list = makeArray(5, (i) => i * 2); // [0, 2, 4, 6, 8]
 * ```
 *
 * @param length
 * @param mapfn
 * @returns
 */
export function makeArray<T>(length: number, mapfn: (index: number) => T) {
    return Array.from({ length }, (_, i) => mapfn(i));
}

/**
 * Returns a array.
 *
 * @example
 * ```js
 * strToArray(null);            // [];
 * strToArray("a,b,c");         // ["a", "b", "c"];
 * strToArray(["a", "b", "c"]); // ["a", "b", "c"];
 * ```
 *
 * @param length
 * @param mapfn
 * @returns
 */
export function strToArray(value: string | string[], separator: string | RegExp = ",") {
    return isString(value) ? value.split(separator) : isArray(value) ? value : [];
}
