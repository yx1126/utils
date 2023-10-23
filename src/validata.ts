import { toString } from "./object";
import type { ToArray } from "./types";

type BaseTypeOfKeys = "Boolean" | "Number" | "String" | "Function" | "Array" | "Date" | "RegExp" | "Undefined" | "Null" | "Object" | "Promise" | "Map" | "Set" | "WeakMap" | "WeakSet";
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
    "[object Promise]": "promise",
    "[object Map]": "map",
    "[object Set]": "set",
    "[object WeakMap]": "weakMap",
    "[object WeakSet]": "weakSet",
};

/**
 *
 * @example
 * ```js
 * typeOf({});   // object
 * typeOf([]);   // array
 * typeOf(1);    // number
 * typeOf("1");  // string
 * typeOf(true); // boolean
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
 * checkOf([], "array");   // true
 * checkOf(1, "string");   // false
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
 * isNumber(1);    // true
 * isNumber("1");  // false
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
 * isString("1");  // true
 * isString(1);    // false
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
 * isArray([1]);   // true
 * isArray("1");   // false
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
 * isObject({});   // true
 * isObject("1");  // false
 * ```
 *
 * @param value
 * @returns
 */
export function isObject<T extends object = Record<string, any>>(value: unknown): value is T {
    return checkOf(value, "object");
}

/**
 *
 * @example
 * ```js
 * isFunction(() => {});   // true
 * isFunction("1");        // false
 * ```
 *
 * @param value
 * @returns
 */
export function isFunction<T extends Function>(value: unknown): value is T {
    return checkOf(value, "function");
}

/**
 *
 * @example
 * ```js
 * isPromise(new Promise(() => {}));       // true
 * isPromise(Promise.resolve());           // true
 * isPromise(Promise.reject());            // true
 * isPromise({ then() {}, catch() {} });   // true
 * isPromise(() => {});                    // false
 * ```
 *
 * @param value
 * @returns
 */
export function isPromise<T = any>(value: unknown): value is Promise<T> {
    return (checkOf(value, "promise") || isObject(value) || isFunction(value)) && isFunction((value as any).then) && isFunction((value as any).catch);
}

/**
 *
 * @example
 * ```js
 * isSymbol(Symbol()); // true
 * isFunction("1");    // false
 * ```
 *
 * @param value
 * @returns
 */
export function isSymbol<T extends symbol>(value: unknown): value is T {
    return typeof value === "symbol";
}
