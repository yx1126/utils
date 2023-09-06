import { toString } from "./object";
import type { ToArray } from "./types";

type BaseTypeOfKeys = "Boolean" | "Number" | "String" | "Function" | "Array" | "Date" | "RegExp" | "Undefined" | "Null" | "Object";
type TypeOfKey = `[object ${BaseTypeOfKeys}]`;
type TypeOfValues = Uncapitalize<BaseTypeOfKeys>;

const map: Record<TypeOfKey, TypeOfValues> = {
    "[object Boolean]": "boolean",
    "[object Number]": "number",
    "[object String]": "string",
    "[object Function]": "function",
    "[object Array]": "array",
    "[object Date]": "date",
    "[object RegExp]": "regExp",
    "[object Undefined]": "undefined",
    "[object Null]": "null",
    "[object Object]": "object",
};

/**
 *
 * @example
 * ```js
 * typeOf({})   // object
 * typeOf([])   // array
 * typeOf(1)    // number
 * typeOf("1")  // string
 * typeOf(true) // boolean
 * ```
 *
 * @param {Any} value
 * @returns {String}
 */
export function typeOf<T>(value: T) {
    return map[toString(value) as TypeOfKey];
}

/**
 *
 * @example
 * ```js
 * checkOf([], "array")   // true
 * checkOf(1, "string")   // false
 * ```
 *
 * @param {Any} value
 * @param {String} type
 * @returns
 */
export function checkOf<T>(value: unknown, type: TypeOfValues): value is T {
    return map[toString(value) as TypeOfKey] === type;
}

/**
 *
 * @example
 * ```js
 * isNumber(1); // true
 * isNumber("1"); // false
 * ```
 *
 * @param value
 * @returns
 */
export function isNumber(value: unknown): value is number {
    return checkOf(value, "number");
}

/**
 *
 * @example
 * ```js
 * isNumber(1); // true
 * isNumber("1"); // false
 * ```
 *
 * @param value
 * @returns
 */
export function isString(value: unknown): value is string {
    return checkOf(value, "string");
}

/**
 *
 * @example
 * ```js
 * isNumber(1); // true
 * isNumber("1"); // false
 * ```
 *
 * @param value
 * @returns
 */
export function isArray<T>(value: unknown): value is ToArray<T> {
    return checkOf(value, "array");
}

/**
 *
 * @example
 * ```js
 * isNumber(1); // true
 * isNumber("1"); // false
 * ```
 *
 * @param value
 * @returns
 */
export function isObject<T extends object = object>(value: unknown): value is T {
    return checkOf(value, "object");
}
