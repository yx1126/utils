import { checkOf } from "./validata";

/**
 * Returns a object.
 *
 * @example
 * ```js
 * const user = { name: "u", age: 10 };
 *
 * omit(user, ["name"]); // { age: 10 }
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
 * pick(user, ["name"]); // { name: "u" }
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
 * toString("name"); // [object String]
 * toString({});     // [object Object]
 * toString([]);     // [object Array]
 * toString(true);   // [object Boolean]
 * ```
 * @param value
 * @returns
 */
export function toString(value: any) {
    return Object.prototype.toString.call(value);
}


export function merge<T extends object = object, S extends object = object>(target: T, ...sources: S[]) {
    if(!sources.length) return target;
    return sources.reduce((pre, item) => {
        return Object.assign(pre, item);
    }, { ...target });
}


export function deepMerge<T extends object = object, S extends object = object>(target: T, ...sources: S[]) {
    if(!sources.length) return target;
    return sources.reduce((pre, item) => {
        const result: any = { ...pre };
        Object.keys(item).forEach(key => {
            const value = (item as any)[key];
            result[key] = checkOf<object>(value, "object") ? deepMerge(result[key], value) : value;
        });
        return result;
    }, { ...target });
}
