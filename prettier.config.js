/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  endOfLine: "lf",
  bracketSameLine: false,
  arrowParens: "avoid",
  bracketSpacing: true,
  printWidth: 120,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["<THIRD_PARTY_MODULES>", "^@(.*)$", "^[.]/", "^[.]{2,}/"],
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};

export default config;
