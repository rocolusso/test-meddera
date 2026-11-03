/**
 * ESLint 10 flat config: the Airbnb style guide for a Next.js App Router + TypeScript project.
 *
 * eslint-config-airbnb supports only ESLint 7-8 and eslint-config-next pulls plugins without ESLint 10 support, so the
 * Airbnb rules live in config/eslint/ and use plugins that support ESLint 10:
 * @stylistic, eslint-plugin-import-x, typescript-eslint, @eslint-react, eslint-plugin-jsx-a11y-x,
 * eslint-plugin-react-hooks and @next/eslint-plugin-next.
 */
import js from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importX from 'eslint-plugin-import-x';
import jsxA11y from 'eslint-plugin-jsx-a11y-x';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { airbnbA11y } from './config/eslint/airbnb-a11y.mjs';
import { airbnbBase } from './config/eslint/airbnb-base.mjs';
import { airbnbHooks } from './config/eslint/airbnb-hooks.mjs';
import { airbnbImports } from './config/eslint/airbnb-imports.mjs';
import { airbnbReact } from './config/eslint/airbnb-react.mjs';
import { airbnbStylistic } from './config/eslint/airbnb-stylistic.mjs';
import { airbnbTypescript } from './config/eslint/airbnb-typescript.mjs';
import { nextRules } from './config/eslint/next.mjs';

const config = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'dist/**',
      'node_modules/**',
      'next-env.d.ts',
      'pofo/**',
      '_to_delete/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
      'import-x/extensions': ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    },
    plugins: {
      '@stylistic': stylistic,
      '@typescript-eslint': tseslint.plugin,
      'import-x': importX,
      '@eslint-react': eslintReact,
      'jsx-a11y-x': jsxA11y,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      ...airbnbBase,
      ...airbnbStylistic,
      ...airbnbImports,
      ...airbnbTypescript,
      ...airbnbReact,
      ...airbnbA11y,
      ...airbnbHooks,
      ...nextRules,

      // Airbnb rules left out on purpose.
      // Next.js route handlers, metadata and config files need named exports.
      'import-x/prefer-default-export': 'off',
      // TypeScript resolves imports and reports missing modules itself.
      'import-x/no-unresolved': 'off',

      // Airbnb options adjusted to this project.
      // The original Airbnb options: long strings (article texts, URLs) are not split.
      '@stylistic/max-len': ['error', 100, 2, {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      }],
      // Airbnb's indent skips JSX and relies on the deprecated jsx-indent; here one rule covers both.
      '@stylistic/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
      }],

      // Earlier project decisions, kept.
      // Fonts come from @fontsource, not from a <link> in a custom document.
      '@next/next/no-page-custom-font': 'off',
      // A rule for the Pages Router; the App Router root layout renders <head> itself.
      '@next/next/no-head-element': 'off',
      // Effects that sync state from browser APIs (theme, storage, viewport) are intended here.
      'react-hooks/set-state-in-effect': 'off',
      // Clickable cards and overlays have a keyboard path through the link or button inside them.
      'jsx-a11y-x/click-events-have-key-events': 'off',
      'jsx-a11y-x/no-static-element-interactions': 'off',
    },
  },
  {
    // The single place where JSON-LD is written into the page: JSON.stringify output, no user HTML.
    files: ['src/components/JsonLd.tsx'],
    rules: {
      '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',
    },
  },
];

export default config;
