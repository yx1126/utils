import { checkOf } from "./validata";

/**
 * Returns a object.
 *
 * @example
 * ```js
 * const user = { name: "u", age: 10 };
 *
 * omit(user, ["name"]) // { age: 10 }
 * ```
 *
 * @param {Object} data - The source object.
 * @param {Array} fields - The keys in data.
 * @returns {Object}
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
 * pick(user, ["name"]) // { name: "u" }
 * ```
 *
 * @param {Object} data - The source object.
 * @param {Array} fields - The keys in data.
 * @returns {Object}
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
 * toString("name") // [object String]
 * toString({})     // [object Object]
 * toString([])     // [object Array]
 * toString(true)   // [object Boolean]
 * ```
 * @param {Any} value
 * @returns {String}
 */
export function toString(value: any) {
    return Object.prototype.toString.call(value);
}
