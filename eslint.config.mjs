import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.{js,ts,tsx,vue}'],
    extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended"
    ],
    rules: {
      'array-callback-return': [
        'warn',
        {
          checkForEach: true,
          allowVoid: true
        }
      ],
      'for-direction': 'error',
      'no-await-in-loop': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-const-assign': 'error',
      'no-constant-binary-expression': 'error',
      'no-constant-condition': 'error',
      'no-debugger': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'warn',
      'no-empty-character-class': 'warn',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'warn',
      'no-fallthrough': 'warn',
      'no-func-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'warn',
      'no-invalid-regexp': 'warn',
      'no-irregular-whitespace': [
        'warn',
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
          skipJSXText: true
        }
      ],
      'no-misleading-character-class': 'warn',
      'no-new-native-nonconstructor': 'error',
      'no-obj-calls': 'error',
      'no-prototype-builtins': 'error',
      'no-self-assign': 'error',
      'no-self-compare': 'error',
      'no-sparse-arrays': 'error',
      'no-unsafe-finally': 'off',
      'no-unused-private-class-members': 'warn',
      'no-unused-vars': 'warn',
      'no-use-before-define': 'warn',
      'no-useless-backreference': 'warn',
      'require-atomic-updates': 'warn',
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'block-scoped-var': 'error',
      'camelcase': 'warn',
      'capitalized-comments': 'warn',
      'consistent-this': 'warn',
      'curly': 'warn',
      'default-case-last': 'warn',
      'default-param-last': 'warn',
      'dot-notation': 'warn',
      'eqeqeq': 'warn',
      'func-name-matching': 'warn',
      'func-style': ['warn', 'declarion'],
      'init-declarations': 'warn',
      'max-depth': 'warn',
      'no-else-return': 'warn',
      'no-empty': 'warn',
      'no-empty-function': 'warn',
      'prefer-template': 'warn',
      'prefer-spread': 'warn',
      'prefer-object-spread': 'warn',
      'no-useless-rename': 'warn'
    },
    ignores: [".config/*"],
    linterOptions: {
      noInlineConfig: false
    }
  }
);
