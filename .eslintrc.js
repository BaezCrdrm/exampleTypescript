module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "browser": false,
        "node": true
    },
    rules: {
        "@typescript-eslint/no-explicit-any": 0,
        "no-mixed-spaces-and-tabs": 2,
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "block-spacing": ["error", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "key-spacing": ["error", { "mode": "strict" }],
        "padded-blocks": ["error", "never"],
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        // "no-var-requires": 1
    }
};