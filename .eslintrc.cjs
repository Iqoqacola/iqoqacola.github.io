module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react/prop-types': 'off',
    // react-three-fiber passes these straight to three.js objects
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'args', 'geometry', 'position', 'intensity', 'transparent', 'opacity',
          'roughness', 'metalness', 'toneMapped', 'object',
        ],
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
