import path from "path";

const buildEslintCommand = filenames =>
  `eslint --fix ${filenames.map(f => `"${path.relative(process.cwd(), f)}"`).join(" ")}`;

const buildPrettierCommand = filenames =>
  `prettier ${filenames.map(f => `"${path.relative(process.cwd(), f)}"`).join(" ")} --write --config`;

const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
};

export default config;
