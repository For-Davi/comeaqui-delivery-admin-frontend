import withNuxt from './.nuxt/eslint.config.mjs';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';

export default withNuxt({
  plugins: {
    prettier: eslintPluginPrettierRecommended.plugins.prettier,
    vue: pluginVue,
  },
  rules: {
    ...eslintPluginPrettierRecommended.rules,
    ...pluginVue.configs['flat/recommended'].rules,
  },
  files: [
    '*.vue', '**/*.vue', 
    '*.js', '**/*.js', 
    '*.jsx', '**/*.jsx', 
    '*.ts', '**/*.ts', 
    '*.tsx', '**/*.tsx', 
    '*.html', '**/*.html', 
    '*.css', '**/*.css', 
    '*.scss', '**/*.scss', 
    '*.md', '**/*.md'
  ],
  languageOptions: {
    parserOptions: {
      parser: '@typescript-eslint/parser',
    },
  },
});

