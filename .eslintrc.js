module.exports = {
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/react'],
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
	settings: {
		react: {
			version: '^16.4.2',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		commonjs: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				trailingComma: 'all',
			},
		],
		'no-console': 'off',
		strict: ['error', 'global'],
		curly: 'warn',
		'prefer-const': [
			'error',
			{
				destructuring: 'all',
			},
		],
		'arrow-body-style': [2, 'as-needed'],
		'consistent-return': 0,
		'react/prefer-stateless-function': 0,
		'react/require-default-props': 0,
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
		],
		radix: 0,
		'no-shadow': [
			2,
			{
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
			},
		],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'import/no-extraneous-dependencies': 0,
		'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/indent': [2, 2],
    'import/extensions': [1, "never", { ignorePackages: true }]
	},
};
