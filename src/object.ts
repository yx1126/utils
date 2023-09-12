import { checkOf } from "./validata";

/**
 * Returns a object.
 *
 * @example
 * ```js
 * const user = { name: "u", age: 10 };
 *
 * console.log(omit(user, ["name"])); // { age: 10 }
 * ```
 *
 * @param data - The source object.
 * @param fields - The keys in data.
 * @returns
 */
export function omit<T extends object, K extends keyof T>(data: T, fields: K[]): K[] extends never[] ? T : Omit<T, K> {
    if(!checkOf(data, "object")) return data;
    const result: any = {};
    for(const key in data) {
        if(!fields.includes(key as any)) {
            result[key] = data[key];
        }
    }
    return result;
}

/**
 * Returns a object.
 *
 * @example
 * ```js
 * const user = { name: "u", age: 10 };
 *
 * console.log(pick(user, ["name"])); // { name: "u" }
 * ```
 *
 * @param data - The source object.
 * @param fields - The keys in data.
 * @returns
 */
export function pick<T extends object, K extends keyof T>(data: T, fields: K[]): K[] extends never[] ? T : Pick<T, K> {
    if(!checkOf(data, "object")) return data;
    const result: any = {};
    for(const key in data) {
        if(fields.includes(key as any)) {
            result[key] = data[key];
        }
    }
    return result;
}

/**
 *
 * @example
 * ```js
 * console.log(toString("name")); // [object String]
 * console.log(toString({}));     // [object Object]
 * console.log(toString([]));     // [object Array]
 * console.log(toString(true));   // [object Boolean]
 * ```
 * @param value
 * @returns
 */
export function toString(value: any) {
    return Object.prototype.toString.call(value);
}
