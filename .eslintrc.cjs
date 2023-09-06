const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
    root: true,
    extends: ["@yx1126/eslint-config"],
    rules: {
        "keyword-spacing": ["error", {
            overrides: {
                "if": { "after": false },
                "for": { "after": false },
                "while": { "after": false },
                "switch": { "after": false },
            },
        }],
    },
});
