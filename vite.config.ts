import { resolve, join } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import {
	BASE_PORT, OUTPUT_DIR, SOURCE_DIR,
} from './project.config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const IS_BUILD = mode === 'production';

	const BASE_URL = '/';

	return {
		base: BASE_URL,
		server: {
			host: '0.0.0.0',
			port: BASE_PORT,
		},
		root: SOURCE_DIR,
		envDir: '../',
		build: {
			minify: 'terser',
			cssMinify: 'lightningcss',
			manifest: IS_BUILD,
			outDir: OUTPUT_DIR,
			rollupOptions: {
				input: resolve(SOURCE_DIR, 'index.html'),
				output: {
					chunkFileNames: 'scripts/[name]-chunk-[hash].js',
					entryFileNames: 'scripts/index-[hash].js',
					assetFileNames: ({ name }) => {
						if (/\.css$/.test(name ?? '')) {
							return 'styles/[name]-[hash][extname]';
						}
						if (/.(woff2|woff)$/.test(name ?? ''))
							return 'fonts/[name][extname]';

						if (/.(ico|jpg|png|webp|avif|svg)$/.test(name ?? ''))
							return 'img/[name][extname]';

						if (/.(mp4)$/.test(name ?? ''))
							return 'videos/[name][extname]';

						return 'assets/[name][extname]';
					},
				},
			},
			emptyOutDir: true,
		},
		resolve: {
			alias: {
				'vue': 'vue/dist/vue.esm-bundler.js',
				'@': SOURCE_DIR,
				'@components': join(SOURCE_DIR, 'components'),
				'@scripts': join(SOURCE_DIR, 'scripts'),
				'@styles': join(SOURCE_DIR, 'styles'),
				'@img': join(SOURCE_DIR, 'assets/img'),
			},
		},
		plugins: [
			vue(),
		],
	};
});
