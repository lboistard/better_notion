module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "prefer-const": 1,
    "quotes": ["warn", "double"],
    "vars-on-top": "off",
    "no-else-return": "off",
    "no-underscore-dangle": "off",
    "no-console": "off",
    "max-len": ["error", 120],
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "prefer-arrow-callback": "warn",
    "func-names": "warn",
    "no-use-before-define": "warn",
    "function-paren-newline": "off",
    "no-var": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn",
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "dot-location": "warn",
    "brace-style": ["warn", "1tbs", {
      "allowSingleLine": true
    }],
    "object-curly-newline": ["warn", {"consistent": true}],
    "object-curly-spacing": ["warn", "always"],
    "keyword-spacing": "warn",
    "space-before-blocks": "warn",
    "space-infix-ops": "warn",
    "space-before-function-paren": [
      "warn", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "no-trailing-spaces": "warn",
    "space-in-parens": "warn",
    "semi-spacing": "warn",
    "no-multi-spaces": "warn",
    "eqeqeq": "warn",
    "comma-dangle": [ 
      "error", {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ],
    "comma-spacing": "warn",
    "indent": ["warn", 2, { "SwitchCase": 1, "offsetTernaryExpressions": true }]
  },
}
