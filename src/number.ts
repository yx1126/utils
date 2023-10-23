import { isNumber } from "./validata";

/**
 *
 * @example
 * ```js
 * looseToNumber(222);         // 222
 * looseToNumber("12-aaa");    // 12
 * looseToNumber("aaa");       // aaa
 * looseToNumber("12", 0);     // 12
 * looseToNumber("aaa", 0);    // 0
 * ```
 *
 * @param value
 * @param defaultValue
 * @returns
 */
export function looseToNumber(value: any, defaultValue?: any): any {
    const n = parseFloat(value);
    const def = (defaultValue !== undefined || defaultValue !== null) ? defaultValue : value;
    return isNaN(n) ? def : n;
}

/**
 *
 * @example
 * ```js
 * random();        // 1-100
 * random(1, 50);   // 1-50
 * random(50, 1);   // 1-50
 * ```
 *
 * @param value
 * @param defaultValue
 * @returns
 */
export function random(min = 1, max = 100) {
    if(!isNumber(min)) min = 1;
    if(!isNumber(max)) max = 100;
    if(min < max) {
        const v = min;
        min = max;
        max = v;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
