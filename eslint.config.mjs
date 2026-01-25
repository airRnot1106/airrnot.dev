import { keepSortedCss } from '@airrnot/keep-sorted-css';
// import panda from '@pandacss/eslint-plugin';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { builtinCommands } from 'eslint-plugin-command/commands';
import command from 'eslint-plugin-command/config';
import oxlint from 'eslint-plugin-oxlint';
import react from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactYouMightNotNeedAnEffect from 'eslint-plugin-react-you-might-not-need-an-effect';
import storybook from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'styled-system/**',
    '!.storybook',
  ]),
  {
    plugins: {
      react,
    },
    rules: {
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
    },
  },
  reactCompiler.configs.recommended,
  reactYouMightNotNeedAnEffect.configs.recommended,
  // {
  //   name: 'panda/recommended',
  //   plugins: { '@pandacss': panda },
  //   rules: {
  //     ...panda.configs.recommended.rules,
  //     '@pandacss/no-hardcoded-color': 'off',
  //   },
  // },
  ...storybook.configs['flat/recommended'],
  command({
    commands: [...builtinCommands, keepSortedCss],
  }),
  eslintConfigPrettier,
  ...oxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
]);

export default eslintConfig;
