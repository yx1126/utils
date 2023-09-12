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
 * console.log(typeOf({}));   // object
 * console.log(typeOf([]));   // array
 * console.log(typeOf(1));    // number
 * console.log(typeOf("1"));  // string
 * console.log(typeOf(true)); // boolean
 * ```
 *
 * @param value
 * @returns
 */
export function typeOf<T>(value: T) {
    return map[toString(value) as TypeOfKey];
}

/**
 *
 * @example
 * ```js
 * console.log(checkOf([], "array"));   // true
 * console.log(checkOf(1, "string"));   // false
 * ```
 *
 * @param value
 * @param type
 * @returns
 */
export function checkOf<T>(value: unknown, type: TypeOfValues): value is T {
    return map[toString(value) as TypeOfKey] === type;
}

/**
 *
 * @example
 * ```js
 * console.log(isNumber(1));    // true
 * console.log(isNumber("1"));  // false
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
 * console.log(isString("1"));  // true
 * console.log(isString(1));    // false
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
 * console.log(isArray([1]));    // true
 * console.log(isArray("1"));  // false
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
 * console.log(isObject({}));    // true
 * console.log(isObject("1"));  // false
 * ```
 *
 * @param value
 * @returns
 */
export function isObject<T extends object = Record<string, any>>(value: unknown): value is T {
    return checkOf(value, "object");
}
