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
    "plugin:react/recommended",
    "plugin:cypress/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest","cypress"
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
    "react/jsx-indent": [
      "error", 2
    ],
    "react/jsx-indent-props": [
      "error", 2
    ],
    "react/jsx-filename-extension": [
      "error", { "extensions": [".js", ".jsx"] }
    ],
    "react/jsx-one-expression-per-line": [
      "error", { "allow": "single-child" }
    ],
    "testing-library/no-unnecessary-act": ["off", {"isStrict": false}],
    "react-hooks/exhaustive-deps": 'off',
    "jest/expect-expect": 'off',
  }
}
