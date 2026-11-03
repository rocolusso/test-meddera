/**
 * Airbnb hooks rules, including the React Compiler checks of eslint-plugin-react-hooks 7.
 * Values follow the Airbnb JavaScript Style Guide (MIT), ported to flat config for ESLint 10.
 */
export const airbnbHooks = {
  // react-hooks
  'react-hooks/component-hook-factories': 'error',
  'react-hooks/config': 'error',
  'react-hooks/error-boundaries': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/gating': 'error',
  'react-hooks/globals': 'error',
  'react-hooks/immutability': 'error',
  'react-hooks/incompatible-library': 'warn',
  'react-hooks/preserve-manual-memoization': 'error',
  'react-hooks/purity': 'error',
  'react-hooks/refs': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/set-state-in-effect': 'error',
  'react-hooks/set-state-in-render': 'error',
  'react-hooks/static-components': 'error',
  'react-hooks/unsupported-syntax': 'warn',
  'react-hooks/use-memo': 'error',
};
