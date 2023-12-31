export default {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    'max-len': ['warn', {
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreStrings: true
    }],
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
