import js from "@eslint/js";
import astroPlugin from "eslint-plugin-astro";

export default [
  js.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      // Optional niceties
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
    },
  },
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    rules: {
      // Astro files often mix HTML/JS; keep style consistent
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      indent: ["error", 2],
    },
  },
  {
    files: ["**/*.js", "**/*.astro"],
    ignores: ["node_modules/**", "dist/**", "public/**", ".vscode/**"],
    rules: {
      "no-console": "error",
    }
  }
];
