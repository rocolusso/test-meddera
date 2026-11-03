/**
 * Airbnb import rules through eslint-plugin-import-x, with the TypeScript adjustments.
 * Values follow the Airbnb JavaScript Style Guide (MIT), ported to flat config for ESLint 10.
 */
export const airbnbImports = {
  // imports
  'import-x/default': 'error',
  'import-x/export': 'error',
  'import-x/extensions': ['error', 'ignorePackages', { js: 'never', cjs: 'never', mjs: 'never', jsx: 'never', ts: 'never', cts: 'never', mts: 'never', tsx: 'never' }],
  'import-x/first': 'error',
  'import-x/named': 'error',
  'import-x/namespace': 'error',
  'import-x/newline-after-import': 'error',
  'import-x/no-absolute-path': 'error',
  'import-x/no-amd': 'error',
  'import-x/no-cycle': ['error', { maxDepth: '∞' }],
  'import-x/no-duplicates': 'error',
  'import-x/no-dynamic-require': 'error',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-extraneous-dependencies': ['error', { devDependencies: ['test/**', 'tests/**', 'spec/**', '**/__tests__/**', '**/__mocks__/**', 'test.{js,cjs,mjs,ts,cts,mts}', 'test-*.{js,cjs,mjs,ts,cts,mts}', '**/*{.,_}{test,spec}.{js,cjs,mjs,ts,cts,mts}', '**/jest.config.{js,cjs,mjs,ts,cts,mts}', '**/jest.setup.{js,cjs,mjs,ts,cts,mts}', '**/vue.config.{js,cjs,mjs,ts,cts,mts}', '**/webpack.config.{js,cjs,mjs,ts,cts,mts}', '**/webpack.config.*.{js,cjs,mjs,ts,cts,mts}', '**/rollup.config.{js,cjs,mjs,ts,cts,mts}', '**/rollup.config.*.{js,cjs,mjs,ts,cts,mts}', '**/gulpfile.{js,cjs,mjs,ts,cts,mts}', '**/gulpfile.*.{js,cjs,mjs,ts,cts,mts}', '**/Gruntfile{,.{js,cjs,mjs,ts,cts,mts}}', '**/protractor.conf.{js,cjs,mjs,ts,cts,mts}', '**/protractor.conf.*.{js,cjs,mjs,ts,cts,mts}', '**/karma.conf.{js,cjs,mjs,ts,cts,mts}', '**/.eslintrc.{js,cjs,mjs,ts,cts,mts}', '**/*.eslint.{js,cjs,mjs,ts,cts,mts}', '**/eslint.config.{js,cjs,mjs,ts,cts,mts}', '**/prettier.config.{js,cjs,mjs,ts,cts,mts}', '**/lint-staged.config.{js,cjs,mjs,ts,cts,mts}', '**/vite.config.{js,cjs,mjs,ts,cts,mts}', '**/vitest.config.{js,cjs,mjs,ts,cts,mts}', '**/tailwind.config.{js,cjs,mjs,ts,cts,mts}', '**/tsdown.config.{js,cjs,mjs,ts,cts,mts}', '**/tsup.config.{js,cjs,mjs,ts,cts,mts}', '**/drizzle.config.{js,cjs,mjs,ts,cts,mts}'], optionalDependencies: false, peerDependencies: true, bundledDependencies: true }],
  'import-x/no-import-module-exports': ['error', { exceptions: [] }],
  'import-x/no-mutable-exports': 'error',
  'import-x/no-named-as-default': 'error',
  'import-x/no-named-as-default-member': 'error',
  'import-x/no-named-default': 'error',
  'import-x/no-relative-packages': 'error',
  'import-x/no-rename-default': 'warn',
  'import-x/no-self-import': 'error',
  'import-x/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import-x/no-useless-path-segments': ['error', { noUselessIndex: true, commonjs: true }],
  'import-x/no-webpack-loader-syntax': 'error',
  'import-x/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
  'import-x/prefer-default-export': 'error',

  // TypeScript resolves these itself
  'import-x/named': 'off',
  'import-x/no-named-as-default-member': 'off',
};
