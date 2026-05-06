import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

export default [
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginJsonc.configs['flat/recommended-with-json'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    files: ['**/*.json'],
    rules: {
      'jsonc/sort-keys': 'error',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
  {
    ignores: ['.astro/*', 'dist/*', 'node_modules/*', 'scratch/*'],
  },
];

