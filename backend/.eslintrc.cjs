module.exports = {
  'extends': [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended'
  ],
  "env": {
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 2020
  },
  "rules": {
    "quotes": ["error", "double"],
    "vars-on-top": "off",
    "no-else-return": "off",
    "no-underscore-dangle": "off",
    "no-mixed-operators": "off",
    "no-console": "off",
    "comma-dangle": "warn",
    "prefer-destructuring": "off",
    "max-len": ["error", 120],
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "import/no-extraneous-dependencies": ["warn"],
    "curly": "error",
    "no-only-tests/no-only-tests": ["error"],
    "no-multi-spaces": "error",
    "indent": ["warn", 2, { "SwitchCase": 1, "offsetTernaryExpressions": false }],
    "func-names": "off"
  },
  "ignorePatterns": ["public/**/*.js"]
}
