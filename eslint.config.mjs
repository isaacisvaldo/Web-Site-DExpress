import { defineConfig, globalIgnores } from 'eslint/config'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import react from 'eslint-plugin-react'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import pluginQuery from '@tanstack/eslint-plugin-query'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default defineConfig([
  globalIgnores(['.next/**', 'dist/**', 'build/**', 'node_modules/**']),

  ...pluginQuery.configs['flat/recommended'],
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],

    extends: fixupConfigRules(
      compat.extends(
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:@next/next/recommended',     // ← Must be here
        'plugin:prettier/recommended',
      ),
    ),

    plugins: {
      react: fixupPluginRules(react),
      'unused-imports': unusedImports,
      import: fixupPluginRules(importPlugin),
      '@typescript-eslint': typescriptEslint,
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },

    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true, node: true },
    },

    rules: {
      'no-console': 'warn',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/self-closing-comp': 'warn',

      // Sort props (you can turn off if too annoying)
      'react/jsx-sort-props': 'off',               // ← Recommended to disable for now

      // JSX a11y
      'jsx-a11y/label-has-associated-control': 'warn',

      // Prettier
      'prettier/prettier': 'warn',

      // Unused
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // Import order - Fixed configuration
      'import/order': [
        'warn',
        {
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/**', group: 'internal', position: 'after' },
            { pattern: '~/**', group: 'internal', position: 'after' },
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Padding
      'padding-line-between-statements': 'off',   // ← Very noisy, disable for now
    },
  },
])