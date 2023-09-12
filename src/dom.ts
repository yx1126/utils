import { strToArray } from "./array";
import { isString } from "./validata";

/**
 * Returns a Element or null
 *
 * @example
 * ```js
 * const dom = document.querySelector(".target");
 *
 * console.log(getTarget(dom) === getTarget(".target")); // true
 * ```
 *
 * @param target
 * @returns
 */
export function getTarget<T extends Element>(target: T | string) {
    return isString(target) ? document.querySelector(target) : target;
}

/**
 *
 * @example
 * ```js
 * const target = document.querySelector(".target");
 *
 * console.log(target.classList); // ["target"]
 *
 * addClass(target, "flex,center");
 * // or
 * addClass(target, ["flex", "center"]);
 *
 * console.log(target.classList); // ["target", "flex", center"]
 * ```
 *
 * @param target - A selector or Element
 * @param value - class string or list
 * @returns
 */
export function addClass<T extends Element>(target: T | string, value: string | string[]) {
    const dom = getTarget(target);
    dom?.classList.add(...strToArray(value));
    return dom;
}

/**
 *
 * @example
 * ```js
 * const target = document.querySelector(".target");
 *
 * console.log(target.classList); // ["target", "flex", "center"]
 *
 * removeClass(target, "flex,center");
 * // or
 * removeClass(target, ["flex", "center"]);
 *
 * console.log(target.classList); // ["target"]
 * ```
 *
 * @param target - A selector or Element
 * @param value - class string or list
 * @returns
 */
export function removeClass<T extends Element>(target: T | string, value: string | string[]) {
    const dom = getTarget(target);
    dom?.classList.remove(...strToArray(value));
    return dom;
}

/**
 *
 * @example
 * ```js
 * const target = document.querySelector(".target");
 *
 * console.log(target.classList); // ["target", "center"]
 *
 * toggleClass(target, "flex,center");
 * // or
 * toggleClass(target, ["flex", "center"]);
 *
 * console.log(target.classList); // ["target", "flex"]
 * ```
 *
 * @param target - A selector or Element
 * @param value - class string or list
 * @returns
 */
export function toggleClass<T extends Element>(target: T | string, value: string | string[]) {
    const dom = getTarget(target);
    strToArray(value).forEach(className => {
        dom?.classList.toggle(className);
    });
    return dom;
}
