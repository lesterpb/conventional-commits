import globals from "globals";
import eslintPluginPrettier from "eslint-plugin-prettier"; // Importa las reglas de Prettier
import eslintConfigPrettier from "eslint-config-prettier"; // Reemplaza el uso de extends
//import { rules as eslintRecommendedRules } from "@eslint/js"; // Importa las reglas recomendadas de ESLint

export default [
  {
    files: ["**/*.js"],
    // Ignoramos los archivos de test
    ignores: ["**/*.test.js"],
    languageOptions: { sourceType: "commonjs" },
    plugins: {
      prettier: eslintPluginPrettier, // Agrega el plugin de Prettier directamente
    },
    settings: {},
    rules: {
      ...eslintConfigPrettier.rules, // Integra las reglas de eslint-config-prettier
      "prettier/prettier": "error", // Marca errores cuando no siga las reglas de Prettier
      //...eslintRecommendedRules, // Marca errores cuando no siga las reglas recomendadas de EsLint
      // Otras reglas de ESLint pueden ir aquí, estas de abajo las puse a modo de ejemplo pero no seria necesario ya que las reglas se estan declarando con Prettier que es mejor
      //semi: ["error", "always"], // Requiere el uso de punto y coma
      //quotes: ["error", "single"], // Requiere que las comillas sean sencillas
    },
  },
  { languageOptions: { globals: globals.browser } },
];