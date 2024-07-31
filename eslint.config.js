import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginVue from "eslint-plugin-vue"
import prettier from "eslint-plugin-prettier"
import eslintConfigPrettier from "eslint-config-prettier"

export default {
	ignores: [
		"node_modules/**",
		"dist/**",
		"build/**",
		"**/*.min.js",
		"**/*.mjs",
		"**/*.json",
		"**/*.md",
	],
	overrides: [
		{
			files: ["**/*.{js,mjs,cjs,ts,vue}"],
		},
		{
			files: ["**/*.js"],
			languageOptions: { sourceType: "module" },
		},
		{
			languageOptions: { globals: globals.browser },
		},
		pluginJs.configs.recommended,
		...tseslint.configs.recommended,
		...pluginVue.configs["flat/essential"],
		{
			files: ["**/*.vue"],
			languageOptions: {
				parserOptions: { parser: tseslint.parser },
			},
		},
		eslintConfigPrettier,
		{
			plugins: ["prettier"],
			extends: ["plugin:prettier/recommended", "prettier"],
			rules: {
				"prettier/prettier": "warn",
			},
		},
	],
}
