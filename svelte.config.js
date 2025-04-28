import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true,
			prerender: {
				crawl: true,
				enabled: true,
			},
			paths: {
				base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
			}
		}),
		paths: {
            base: '/portfolio'
        }
	},

	compilerOptions: {
		warningFilter: (warning) => !["a11y_no_noninteractive_tabindex"].includes(warning.code)
		
	}
};

export default config;
