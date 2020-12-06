module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        'airbnb/hooks',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/standard',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": "./tsconfig.eslint.json",
        "tsconfigRootDir": __dirname,
    },
    "plugins": [
        '@typescript-eslint',
        'import',
        'jsx-a11y',
        'prefer-arrow',
        'prettier',
        'react',
        'react-hooks',
    ],
    "rules": {
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
              js: 'never',
              jsx: 'never',
              ts: 'never',
              tsx: 'never',
            },
          ],
        'react/jsx-filename-extension': [
            'error',
            {
              extensions: ['.jsx', '.tsx'],
            },
          ],
          '@typescript-eslint/no-unused-vars': [
            'error',
            {
              'vars': 'all',
              'args': 'after-used',
              'argsIgnorePattern': '_',
              'ignoreRestSiblings': false,
              'varsIgnorePattern': '_',
            },
          ],
          "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
         ]
    },
    "overrides": [
        {
          'files': ['*.tsx'],
          'rules': {
            'react/prop-types': 'off',
          },
        },
      ],
      "settings": {
        'import/resolver': {
          "node": {
            paths: ['src'],
          },
        },
      },
    };
