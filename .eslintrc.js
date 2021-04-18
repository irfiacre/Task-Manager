/* eslint-disable no-undef */
module.exports = {
    "env": {
        "react-native/react-native": true
    },
    "plugins": [
        "react",
        "react-native"
      ],
      
    "extends": [
        "plugin:react-native/all"
    ],
    "parserOptions": {
          "ecmaFeatures": {
              "jsx": true
          }
      },
    "parser": "babel-eslint",
    "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 0,
        "react-native/no-raw-text": 2,
        "react-native/sort-styles": 0,
        "react-native/no-single-element-style-arrays": 2
      }
};
