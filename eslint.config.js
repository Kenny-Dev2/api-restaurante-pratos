import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["src/**/*.js"],
    rules: {
      // boas práticas
      "no-unused-vars": "warn",
      "no-console": "off",

      // qualidade
      eqeqeq: "error",
      curly: "error",

      // estilo
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],

      // organização
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "eol-last": ["error", "always"],
    },
  },
]);
