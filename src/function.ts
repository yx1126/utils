import { typeOf } from "./validata";

export function copy<T = unknown>(value: any): T {
    return JSON.parse(JSON.stringify(value));
}

export function deepCopy<T = unknown>(data: any): T {
    const t = typeOf(data);
    let o: any;
    switch(t) {
        case "array":
            o = [];
            break;
        case "object":
            o = {};
            break;
        default:
            return data;
    }
    if(t === "array") {
        for(let i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if(t === "object") {
        for(const i in data) {
            o[i] = deepCopy(data[i]);
        }
    }
    return o as T;
}
