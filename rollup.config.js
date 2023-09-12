import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";

export default defineConfig([
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.cjs",
                format: "cjs",
            },
            {
                file: "dist/index.mjs",
                format: "esm",
            },
        ],
        plugins: [
            resolve(),
            typescript(),
        ],
    },
    {
        input: "./src/index.ts",
        output: {
            file: "dist/index.d.ts",
            format: "esm",
        },
        plugins: [dts()],
    },
]);
