module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        "prettier",
        "prettier/@typescript-eslint",
      "@react-native-community",
      "plugin:@typescript-eslint/recommended",
    ],
  };