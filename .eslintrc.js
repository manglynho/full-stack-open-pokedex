module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true,
    "node": true,
    "commonjs": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "indent": [
      "error",
        2
      ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "no-console": "error",
    "react/prop-types": 0,
    // Adding more errors now
    'testing-library/no-manual-cleanup': 'error',
    'testing-library/no-wait-for-snapshot': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-wait-for': 'error',

    // Disable some rules that are in the "recommended" part.
    // This is a purely stylistic rule
    'testing-library/render-result-naming-convention': 'off',
    // This disallows using `container`, but this is still useful for us sometimes
    'testing-library/no-container': 'off',
    // This disallows using direct Node properties (eg: firstChild), but we have
    // legitimate uses:
    'testing-library/no-node-access': 'off',
    // Disable until https://github.com/testing-library/eslint-plugin-testing-library/issues/359
    // is fixed.
    'testing-library/await-async-query': 'off',
  }
}
