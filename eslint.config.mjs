import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // The gtag shim must push the Arguments object: GTM reads a plain array as a data layer message, not a command.
    files: ["src/lib/ga4-transport.ts"],
    rules: { "prefer-rest-params": "off" },
  },
  {
    // Plain <img> on purpose: the SVG logos gain nothing from the image optimizer and stay out of its JS, and the
    // Meta Pixel <noscript> beacon is a 1x1 tracking request, not a picture.
    files: [
      "src/components/new-ui/HeaderNew.tsx",
      "src/components/new-ui/FooterNew.tsx",
      "src/components/FacebookPixel.tsx",
    ],
    rules: { "@next/next/no-img-element": "off" },
  },
  {
    // The App Router root layout renders <head> itself; next/head is a Pages Router API.
    files: ["src/components/RootShell.tsx"],
    rules: { "@next/next/no-head-element": "off" },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Not part of the app: old copies and files waiting to be deleted.
    "pofo/**",
    "old_project_design/**",
    "_to_delete/**",
  ]),
]);

export default eslintConfig;
