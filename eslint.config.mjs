import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error", {
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_"
				},
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": ["error", {
				prefer: "type-imports",
				fixStyle: "inline-type-imports"
			}],
			"no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]", "argsIgnorePattern": "^_" }],
			"semi": ["error", "always"],
			// Disabled indent rule due to known bugs in ESLint 9.x causing stack overflow
			// Consider using Prettier or @stylistic/eslint-plugin instead
			"indent": ["error", "tab", { "SwitchCase": 1 }],
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "double", { "avoidEscape": false }],
			"curly": ["error", "all"],
			"object-curly-spacing": ["error", "always"],
		},
	}
]);

export default eslintConfig;
