module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": [
      "airbnb", "plugin:jest/recommended"
  ],
  "parserOptions": {
    "sourceType": "module"
  },
  "plugins": [
    "react", "jest"
  ],
  "rules": {
    "comma-dangle": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    
    /* Advanced Rules*/
    "no-unused-expressions": "warn",
    "no-useless-concat": "warn",
    "block-scoped-var": "error",
    "consistent-return": "error"
  }
};