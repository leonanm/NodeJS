// eslint.config.js
export default [
    {
      ignores: ["node_modules/**"],
    },
    {
      files: ["**/*.js"], // Altere a extensão conforme seu projeto
      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      rules: {
        // Adicione suas regras aqui, como no .eslintrc anterior
        "no-unused-vars": "warn",
        "no-console": "off",
      },
    },
  ];
  