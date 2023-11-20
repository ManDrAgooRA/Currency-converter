module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
      },
    ],
    'import/no-extraneous-dependencies': ['error',
      { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
    'no-param-reassign': ['error', { props: false }],
    'react/forbid-prop-types': ['off', { forbid: ['array', 'object'] }],
  },
};
