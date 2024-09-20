// @ts-check

import tseslint from 'typescript-eslint';

export default tseslint.config(
    {languageOptions: {parserOptions: {project: ["tsconfig.json"]}}},
    ...tseslint.configs.strictTypeChecked
);
