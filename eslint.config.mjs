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
      // 120 instead of Airbnb's 100: the width this codebase is written in. The other options are Airbnb's:
      // long strings (article texts, URLs) are not split.
      '@stylistic/max-len': ['error', 120, 2, {
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

      // Airbnb bans for...of because of regenerator-runtime; the browserslist targets (Chrome 109+, Safari 16.4+)
      // run it natively. for...in, labels and with stay banned, as in Airbnb.
      'no-restricted-syntax': ['error',
        {
          selector: 'ForInStatement',
          message: 'for..in walks the prototype chain. Use Object.keys/values/entries.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict.',
        },
      ],
      // `void promise;` marks a promise that is not awaited on purpose; void inside expressions stays banned.
      'no-void': ['error', { allowAsStatement: true }],
      // Server logs go to Vercel through console.warn/error (one JSON line for 404s); console.log stays banned.
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // styled-jsx: <style jsx> and <style jsx global> are props of that library, not unknown DOM attributes.
      '@eslint-react/dom-no-unknown-property': ['error', { ignore: ['jsx', 'global'] }],

      // A label that wraps its input is enough (valid HTML and announced correctly); Airbnb also demands htmlFor.
      'jsx-a11y-x/label-has-associated-control': ['error', { assert: 'either', depth: 25 }],

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
    // Plain <img> on purpose: the SVG logos gain nothing from the image optimizer and stay out of its JS, and the
    // Meta Pixel <noscript> beacon is a 1x1 tracking request, not a picture.
    files: [
      'src/components/new-ui/HeaderNew.tsx',
      'src/components/new-ui/FooterNew.tsx',
      'src/components/FacebookPixel.tsx',
    ],
    rules: {
      '@next/next/no-img-element': 'off',
    },
  },
  {
    // A click on the <dialog> backdrop closes the search; the keyboard closes it with Esc natively.
    files: ['src/components/search/SearchPanel.tsx'],
    rules: {
      'jsx-a11y-x/no-noninteractive-element-interactions': 'off',
    },
  },
  {
    // The gtag shim must push the Arguments object: GTM reads a plain array as a data layer message, not a command.
    files: ['src/lib/ga4-transport.ts'],
    rules: {
      'prefer-rest-params': 'off',
    },
  },
  {
    // Inline scripts that must be raw HTML: JSON-LD (JSON.stringify output with < escaped, no user HTML), the theme
    // script that runs before the first paint, and the official bootstrap snippets of GTM, Clarity, Plerdy and the
    // Meta Pixel. All strings are constants from the code.
    files: [
      'src/components/JsonLd.tsx',
      'src/components/RootShell.tsx',
      'src/components/DeferredGoogleTagManager.tsx',
      'src/components/DeferredClarity.tsx',
      'src/components/DeferredPlerdy.tsx',
      'src/components/FacebookPixel.tsx',
    ],
    rules: {
      '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',
    },
  },
];

export default config;
