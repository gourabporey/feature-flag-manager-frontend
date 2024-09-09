import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      // Add custom rules here
      "prefer-const": "error", // Enforce const where possible
      "no-var": "error", // Disallow var
      "prefer-arrow-callback": "error", // Enforce arrow functions
      "func-style": ["error", "expression"], // Optional: Use only function expressions
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
