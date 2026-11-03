/**
 * Airbnb React rules, mapped from eslint-plugin-react (no ESLint 10 support) to @eslint-react and the JSX rules of
 * @stylistic. Values follow the Airbnb JavaScript Style Guide (MIT).
 *
 * Airbnb rules without a counterpart here, and why:
 * - prop-types, require-default-props, default-props-match-prop-types, forbid-prop-types, forbid-foreign-prop-types,
 *   prefer-exact-props, no-unused-prop-types (partly covered by no-unused-props): PropTypes; TypeScript types the props.
 * - destructuring-assignment, function-component-definition: matters of taste that Airbnb wrote for JavaScript.
 * - jsx-filename-extension, jsx-no-undef, jsx-uses-react, jsx-uses-vars, react-in-jsx-scope, no-typos: the TypeScript
 *   compiler and the automatic JSX runtime already cover them.
 * - prefer-es6-class, prefer-stateless-function, sort-comp, state-in-constructor, static-property-placement,
 *   no-arrow-function-lifecycle, require-render-return, no-is-mounted, no-this-in-sfc, no-redundant-should-component-update:
 *   class components; the site has none, and no-class-component below keeps it that way.
 * - jsx-indent, jsx-props-no-multi-spaces: covered by @stylistic/indent and no-multi-spaces (see eslint.config.mjs).
 * - Not taken from @eslint-react: the iframe sandbox rules (not in Airbnb; a sandbox would break the Google Maps embed).
 * - jsx-boolean-value, jsx-fragments, jsx-no-bind, jsx-props-no-spread-multi, no-invalid-html-attribute: no counterpart.
 */
export const airbnbReact = {
  // components and state
  '@eslint-react/no-class-component': 'error',
  '@eslint-react/no-access-state-in-setstate': 'error',
  '@eslint-react/no-direct-mutation-state': 'error',
  '@eslint-react/no-set-state-in-component-did-update': 'error',
  '@eslint-react/no-set-state-in-component-will-update': 'error',
  '@eslint-react/no-unused-state': 'error',
  '@eslint-react/no-unused-class-component-members': 'error',
  '@eslint-react/no-nested-component-definitions': 'error',
  '@eslint-react/no-nested-lazy-component-declarations': 'error',
  '@eslint-react/no-unstable-context-value': 'error',
  '@eslint-react/no-unstable-default-props': 'error',
  '@eslint-react/no-unused-props': 'error',
  '@eslint-react/no-array-index-key': 'error',
  '@eslint-react/no-missing-key': 'error',
  '@eslint-react/no-duplicate-key': 'error',
  '@eslint-react/jsx-no-key-after-spread': 'error',

  // deprecated APIs (react/no-deprecated, react/forward-ref-uses-ref, react/no-string-refs)
  '@eslint-react/no-component-will-mount': 'error',
  '@eslint-react/no-component-will-receive-props': 'error',
  '@eslint-react/no-component-will-update': 'error',
  '@eslint-react/no-create-ref': 'error',
  '@eslint-react/no-forward-ref': 'error',
  '@eslint-react/no-context-provider': 'error',
  '@eslint-react/no-use-context': 'error',
  '@eslint-react/dom-no-find-dom-node': 'error',
  '@eslint-react/dom-no-render': 'error',
  '@eslint-react/dom-no-hydrate': 'error',
  '@eslint-react/dom-no-render-return-value': 'error',
  '@eslint-react/dom-no-use-form-state': 'error',
  '@eslint-react/dom-no-flush-sync': 'error',

  // JSX correctness
  '@eslint-react/jsx-no-children-prop': 'error',
  '@eslint-react/jsx-no-children-prop-with-children': 'error',
  '@eslint-react/jsx-no-comment-textnodes': 'error',
  '@eslint-react/jsx-no-namespace': 'error',
  '@eslint-react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  '@eslint-react/jsx-no-leaked-dollar': 'error',
  '@eslint-react/jsx-no-leaked-semicolon': 'error',
  '@eslint-react/no-leaked-conditional-rendering': 'error',

  // DOM
  '@eslint-react/dom-no-missing-button-type': 'error',
  '@eslint-react/dom-no-script-url': 'error',
  '@eslint-react/dom-no-unsafe-target-blank': 'error',
  '@eslint-react/dom-no-string-style-prop': 'error',
  '@eslint-react/dom-no-unknown-property': 'error',
  '@eslint-react/dom-no-void-elements-with-children': 'error',
  '@eslint-react/dom-no-dangerously-set-innerhtml': 'error',
  '@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',

  // browser APIs left running after unmount
  '@eslint-react/web-api-no-leaked-event-listener': 'error',
  '@eslint-react/web-api-no-leaked-fetch': 'error',
  '@eslint-react/web-api-no-leaked-interval': 'error',
  '@eslint-react/web-api-no-leaked-timeout': 'error',
  '@eslint-react/web-api-no-leaked-intersection-observer': 'error',
  '@eslint-react/web-api-no-leaked-resize-observer': 'error',

  // JSX formatting (react/jsx-* in Airbnb)
  '@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
  '@stylistic/jsx-closing-tag-location': 'error',
  '@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  '@stylistic/jsx-curly-newline': ['error', { multiline: 'consistent', singleline: 'consistent' }],
  '@stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
  '@stylistic/jsx-equals-spacing': ['error', 'never'],
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  '@stylistic/jsx-indent-props': ['error', 2],
  '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  '@stylistic/jsx-pascal-case': ['error', { allowAllCaps: true, allowNamespace: true }],
  '@stylistic/jsx-quotes': ['error', 'prefer-double'],
  '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
  '@stylistic/jsx-tag-spacing': ['error', {
    closingSlash: 'never',
    beforeSelfClosing: 'always',
    afterOpening: 'never',
    beforeClosing: 'never',
  }],
  '@stylistic/jsx-wrap-multilines': ['error', {
    declaration: 'parens-new-line',
    assignment: 'parens-new-line',
    return: 'parens-new-line',
    arrow: 'parens-new-line',
    condition: 'parens-new-line',
    logical: 'parens-new-line',
    prop: 'parens-new-line',
  }],
};
