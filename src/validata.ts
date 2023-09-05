import { ArrayOf } from "./types";

const validataKeys = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null", "Object"];

type A = keyof typeof validataKeys;

function format(data: Array<string>) {
    return data.reduce<Record<`[object ${ArrayOf<typeof data>}]`, Uncapitalize<ArrayOf<typeof data>>>>((result) => {
        return result;
    }, {});
}

const map = format(validataKeys);
