import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/public/**",
      "tailwind.config.js",
      "postcss.config.js"
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsparser,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
        URL: "readonly",
        URLSearchParams: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        self: "readonly",
        Blob: "readonly",
        FileReader: "readonly",
        FormData: "readonly",
        XMLHttpRequest: "readonly",
        module: "readonly"
      }
    },
    plugins: {
      react,
      tseslint
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-unused-vars": "warn",
      "no-empty": "warn",
      "no-cond-assign": "warn"
    }
  }
];
