// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules", "dist", "temp_check_plugin.js", "eslint.config.js", "vite.config.js"],
  },

  // JS
  js.configs.recommended,

  // TypeScript – FLAT CONFIG CHUẨN (ARRAY)
  ...tseslint.configs.recommended,

  // Vue 3 – FLAT CONFIG (ARRAY)
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
        projectService: true, // Use projectService instead of project
        allowDefaultProject: true, // Allow project service to infer files not explicitly included
        extraFileExtensions: [".vue"],
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];