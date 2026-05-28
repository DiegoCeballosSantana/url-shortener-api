import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig, // Desactiva las reglas de ESLint que choquen con Prettier
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Permitimos console.log para el arranque del servidor
      '@typescript-eslint/no-explicit-any': 'warn', // Te avisa si usas 'any' suelto
    },
  },
);
