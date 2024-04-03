/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'window-wallpaper': "url('/bg.webp')",
				'chessboard': "url('/chessboard.png')"
			},
			backgroundColor: {
				'primary': 'rgb(0 128 128 / 1)',
			}
			
		},
	},
	plugins: [],
}
