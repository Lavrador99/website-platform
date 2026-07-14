import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules (strict)
  ...tseslint.configs.recommendedTypeChecked,

  // React rules
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React general
      'react/react-in-jsx-scope': 'off', // Not needed with react-jsx transform
      'react/prop-types': 'off', // TypeScript handles this
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Accessibility
      ...jsxA11y.configs.recommended.rules,

      // ARCHITECTURAL RULE: @clients imports are ONLY allowed in @contexts/WebsiteConfigContext.tsx
      // Enforced by convention — add import/no-restricted-paths if eslint-plugin-import is added
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../clients/*', '../../clients/*', '**/clients/*'],
              message:
                'Direct client config imports are forbidden. Client configs must only be loaded inside src/contexts/WebsiteConfigContext.tsx via the dynamic loadClient() function.',
            },
          ],
        },
      ],
    },
  },

  // Ignore build output and node_modules
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', '*.config.ts'],
  },
)
