import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';
import cleaner from 'rollup-plugin-cleaner';
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import svg from 'rollup-plugin-svg';
import amd from 'rollup-plugin-amd';

import packageJson from './package.json';

export default {
	input: './src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		amd(),
		json(),
		scss(),
		commonjs(),
		svg(),
		typescript({
			tsconfig: './tsconfig.build.json',
		}),
		cleaner({
			targets: ['./build/'],
		}),
	],
};
