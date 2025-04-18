import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const dirname =
	typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: './project.inlang',
			outdir: './src/lib/paraglide',
			outputStructure: process.argv.includes('dev') ? 'locale-modules' : 'message-modules',
			strategy: ['url', 'preferredLanguage', 'baseLocale'],
			urlPatterns: [
				{
					pattern: "/{portfolio/}?about",
					localized: [
						["en", "/{portfolio/}?about"],
						["fr", "/{portfolio/}?a-propos"],
					],
				},
				{
					pattern: "/{portfolio/}?projects",
					localized: [
						["en", "/{portfolio/}?projects"],
						["fr", "/{portfolio/}?projets"],
					],
				},
				{
					pattern: "/{portfolio/}?projects/:slug",
					localized: [
						["en", "/{portfolio/}?projects/:slug"],
						["fr", "/{portfolio/}?projets/:slug"],
					],
				},
				{
					pattern: "/{portfolio/}?:path(.*)?",
					localized: [
						["en", "/{portfolio/}?en/:path(.*)?"],
						["fr", "/{portfolio/}?/:path(.*)?"],
					],
				},
			],
		}),
		tailwindcss(),
		sveltekit(),
		enhancedImages(),
	],
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			},
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/writing-tests/test-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, '.storybook')
					})
				],
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: 'playwright',
						instances: [
							{
								browser: 'chromium'
							}
						]
					},
					setupFiles: ['.storybook/vitest.setup.ts']
				}
			}
		]
	}
});
