/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				"primary": "var(--primary)",
				"on-primary": "var(--on-primary)",
				"primary-container": "var(--primary)",
				"on-primary-container": "var(--on-primary)",
				"surface": "var(--surface)",
				"on-surface": "var(--on-surface)",
				"surface-container-lowest": "var(--surface-container-lowest)",
				"surface-container-low": "var(--surface-container-low)",
				"surface-container": "var(--surface-container)",
				"surface-container-high": "var(--surface-container-high)",
				"surface-container-highest": "var(--surface-container-highest)",
				"outline-variant": "var(--outline-variant)",
			},
			fontFamily: {
				"mono": ["IBM Plex Mono", "monospace"],
				"headline": ["Outfit", "sans-serif"],
				"body": ["Outfit", "sans-serif"],
			},
			borderRadius: {
				'tag': 'var(--border-radius-tag)',
			}
		},
	},
	plugins: [],
}
